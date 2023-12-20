const hasUTF16SurrogatePairAt = require('@stdlib/assert-has-utf16-surrogate-pair-at');
// gave up on parsing that confusing xml
// scrape wiktionary kanji pages
const fs = require('fs').promises;

const { write } = require('fs');
const { getURL, wait } = require('../../../util/scrape.js');
const writeJson = require('../../../util/writeJson.js');

const folderPath = './wiktionary/';
const allKanjiFilePath = () => lang + 'wiktionaryKanji.json';
const kanjiDataFilePath = () => lang + 'kanjiData.json';

let lang = 'ja'; // can be 'ja' or 'zh'
const jaKanjiDir = 'wiki/カテゴリ:漢字';
const zhKanjiDir = 'zh/Category:汉字';
const wiktionaryURL = () => `https://${lang}.wiktionary.org`;
const startPage = () => wiktionaryURL() + '/' + (lang === 'ja' ? jaKanjiDir : zhKanjiDir);

const kanjiUrl = (kanji) => `${wiktionaryURL()}/wiki/${kanji}`;
const WAIT_MS = 0;

let kanjiData;

(async function () {
  let refetchList = false;
  if (process.argv.includes('--refetchList')) {
    refetchList = true;
    console.log('Refetching kanji list');
  }
  let refetchKanji = false;
  if (process.argv.includes('--refetchKanji')) {
    refetchKanji = true;
    console.log('Refetching kanji data');
  }
  // check for zh language flag
  if (process.argv.includes('--zh')) {
    lang = 'zh';
  }
  console.log(`Getting ${lang} kanji`);

  const allKanji = await getAllKanji(refetchList);
  const kanjiSet = new Set(allKanji);
  console.log(`Total kanji: ${kanjiSet.size}`);
  await writeJson(allKanji, folderPath + allKanjiFilePath());

  if (lang === 'ja') {
    kanjiData = {};
    // read existing kanji data
    if (!refetchKanji) {
      try {
        const kanjiDataFile = await fs.readFile(folderPath + kanjiDataFilePath());
        kanjiData = JSON.parse(kanjiDataFile);
        console.log(`Loaded ${Object.keys(kanjiData).length} kanji`);
      } catch (error) {
        console.log(`No saved ${kanjiDataFilePath()}`);
      }
    }

    try {
      let firstGet = Date.now();
      let gets = 0;
      for (let i = 0; i < allKanji.length; i++) {
        const kanji = allKanji[i];
        if (kanjiData[kanji]) continue;
        const data = await getKanji(kanji);
        kanjiData[kanji] = data;

        gets++;
        const timePerKanji = (Date.now() - firstGet) / gets;
        const estimatedCompletion = new Date(Date.now() + timePerKanji * (allKanji.length - i));
        console.log(
          `Got ${kanji}: ${i + 1}/${
            allKanji.length
          } | Estimated ${estimatedCompletion.toLocaleString()} | ${(1000 / timePerKanji).toFixed(
            2
          )}kanji/s`
        );
        await wait(WAIT_MS);
      }
    } catch (error) {
      console.log(error);
    }
    await writeJson(kanjiData, folderPath + kanjiDataFilePath());
  }
})();

/**
 * Gets a list of all the kanji in Wiktionary JP
 * @param {boolean} overwrite - whether to re fetch irregardless of an existing saved file
 * @returns
 */
async function getAllKanji(overwrite = false) {
  let existingKanji;
  // fetch from existing file
  try {
    const allKanjiFile = await fs.readFile(folderPath + allKanjiFilePath());
    existingKanji = JSON.parse(allKanjiFile);
  } catch (error) {
    console.log(`No saved ${allKanjiFilePath()}`);
    existingKanji = [];
  }
  // return existing kanji if it exists and we're not refetching
  if (existingKanji && !overwrite) {
    return existingKanji;
  }

  const allKanjiArr = [];
  let nextURL = encodeURI(startPage());
  while (nextURL) {
    const { kanji, next } = await getKanjiPage(nextURL);
    allKanjiArr.push(...kanji);
    console.log(`Added ${kanji.length} kanji; total: ${allKanjiArr.length}`);
    nextURL = next;
    await wait(WAIT_MS);
  }
  // combine new kanji with existing kanji
  const allKanjiSet = new Set([...existingKanji, ...allKanjiArr]);
  return [...allKanjiSet];
}

/**
 * Gets the kanji on a page of kanji as well as the url of the next page in the list.
 * @param {string} url
 * @returns
 */
async function getKanjiPage(url) {
  const avoidCategories = lang === 'ja' ? ['!', '*'] : [];

  console.log(`Getting ${url}`);
  const document = await getURL(url, false);
  const categoryHeaderSearchText =
    lang === 'ja' ? 'ページが含まれており、そのうち以下の' : '个页面属于本分类，共';
  const categoryHeader = [...document.querySelectorAll('p')].find((p) =>
    p.textContent.includes(categoryHeaderSearchText)
  );
  const nextPageURLText = lang === 'ja' ? '次のページ' : '下一页';
  const nextPageURL = [...document.querySelectorAll('a')].find((a) =>
    a.textContent.includes(nextPageURLText)
  );

  const kanjiColumnsElem = categoryHeader?.parentElement?.querySelector('div.mw-content-ltr');
  const kanji = [...kanjiColumnsElem.querySelectorAll('div.mw-category-group')].map((div) => ({
    category: div.firstElementChild.textContent,
    kanjiList: [...div.querySelectorAll('a')]
      .map((a) => {
        const split = a.textContent.split('/Unihan/');
        const kanji = split[split.length - 1];
        return kanji;
      })
      .filter((kanji) => isValidKanji(kanji)),
  }));

  const kanjiArr = [];

  for (const { category, kanjiList } of kanji) {
    if (!avoidCategories.includes(category)) {
      kanjiArr.push(...kanjiList);
    }
  }

  return {
    kanji: kanjiArr,
    next: nextPageURL ? wiktionaryURL() + nextPageURL : null,
  };
}

/**
 * Detects if a string is a single character or a surrogate pair
 * @param {string} kanji
 * @returns {boolean}
 */
function isValidKanji(kanji) {
  if (kanji.length > 1) {
    // Is valid if it's a surrogate pair, otherwise probably not valid kanji
    return hasUTF16SurrogatePairAt(kanji, 0);
  } else {
    return true;
  }
}

/**
 * Gets kanji info from a page on Wiktionary
 * @param {string} kanji
 * @returns {object} - kanji data
 */
async function getKanji(kanji) {
  const document = await getURL(kanjiUrl(kanji), true);
  const kanjiData = {};

  // sometimes different ID for kokuji? or maybe just wiktionary editor mistake
  const kanjiHeader = (document.getElementById('漢字') ?? document.getElementById('漢字(国字)'))
    ?.parentElement;
  if (!kanjiHeader) throw new Error(`No kanji header for ${kanji}`);
  const kanjiElems = [];
  let elem = kanjiHeader?.nextElementSibling;
  while (elem && elem.tagName !== 'H2') {
    kanjiElems.push(elem);
    elem = elem.nextElementSibling;
  }

  // remove display:none radical
  const radicalElem = document.getElementById('kanji-radical');
  radicalElem?.remove();

  // remove stroke count thing
  const strokeCountElem = document.getElementById('total-storoke');
  strokeCountElem?.remove();

  // remove references
  const references = [...document.querySelectorAll('sup.reference')];
  for (const reference of references) {
    reference.remove();
  }

  while (kanjiElems.length > 0) {
    let elem = kanjiElems.shift();
    if (elem.tagName === 'P') {
      // skip the 350% large kanji
      continue;
    } else if (elem.tagName === 'UL') {
      // kanji stats
      for (const li of [...elem.querySelectorAll('li')]) {
        let [key, value] = li.textContent.split(/:|：/);
        key = key.trim();
        value = value?.trim();
        kanjiData[key] = value;
      }
    } else if (elem.tagName === 'H3') {
      const header = elem;
      const headerText = header.textContent.replace('[編集]', '').trim();
      const content = kanjiElems.shift();
      // remove excessive newlines
      const contentText = content?.textContent?.trim()?.replace(/\n{2,}/g, '\n');
      kanjiData[headerText] = contentText;
    }
  }

  // add kokuji info in case not in def (彅)
  if (document.getElementById('漢字(国字)')) {
    kanjiData['意義'] = '国字。' + kanjiData['意義'];
  }

  const readingsHeader = document.getElementById('発音(?)')?.parentElement;
  if (readingsHeader) {
    const readingsElem = readingsHeader.nextElementSibling;
    kanjiData['発音'] = readingsElem.textContent;
  }

  return kanjiData;
}

// save on ctrl c
process.on('SIGINT', async () => {
  console.log('Saving...');
  if (kanjiData) {
    console.log('Saving kanji data...');
    await writeJson(kanjiData, folderPath + kanjiDataFilePath());
  }
  process.exit(0);
});
