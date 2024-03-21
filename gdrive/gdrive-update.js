/**
 * @typedef {Object} GithubRepoDictionary
 * @property {string} url
 * @property {string} folderId
 * @property {RegExp} includedNameRegex
 * @property {RegExp} removeNameRegex
 * @property {string} fileNamePrefix
 * @property {boolean} [addDate]
 */
/**
 * @type {GithubRepoDictionary[]}
 */
const repos = [
  {
    url: 'https://api.github.com/repos/stephenmk/Jitendex/releases/latest',
    folderId: japaneseFolderId,
    includedNameRegex: /yomi/,
    removeNameRegex: /jitendex/,
    fileNamePrefix: '[JA-EN] ',
  },
  {
    url: 'https://api.github.com/repos/themoeway/jmdict-yomitan/releases/latest',
    folderId: japaneseFolderId,
    includedNameRegex: /JMnedict/,
    removeNameRegex: /JMnedict/,
    fileNamePrefix: '[JA-JA Names] ',
    addDate: true,
  },
  {
    url: 'https://api.github.com/repos/themoeway/jmdict-yomitan/releases/latest',
    folderId: japaneseFolderId,
    includedNameRegex: /KANJIDIC_english/,
    removeNameRegex: /KANJIDIC_english/,
    fileNamePrefix: '[Kanji] ',
    addDate: true,
  },
  {
    url: 'https://api.github.com/repos/MarvNC/cc-cedict-yomitan/releases/latest',
    folderId: mandarinFolderId,
    includedNameRegex: /CC\-CEDICT(?!\.Hanzi)/,
    removeNameRegex: /CC\-CEDICT(?!\.Hanzi)/,
    fileNamePrefix: '[ZH-EN] ',
    addDate: true,
  },
  {
    url: 'https://api.github.com/repos/MarvNC/cc-cedict-yomitan/releases/latest',
    folderId: mandarinFolderId,
    includedNameRegex: /CC\-CEDICT\.Hanzi/,
    removeNameRegex: /CC\-CEDICT\.Hanzi/,
    fileNamePrefix: '[Hanzi] ',
    addDate: true,
  },
  {
    url: 'https://api.github.com/repos/MarvNC/wordshk-yomitan/releases/latest',
    folderId: cantoneseFolderId,
    includedNameRegex: /Words\.hk\.[\d-]+.zip$/,
    removeNameRegex: /Words\.hk\.[\d-]+.zip$/,
    fileNamePrefix: '[YUE-EN & YUE] ',
    addDate: false,
  },
  {
    url: 'https://api.github.com/repos/MarvNC/wordshk-yomitan/releases/latest',
    folderId: cantoneseFolderId,
    includedNameRegex: /Words\.hk\.Honzi.[\d-]+.zip$/,
    removeNameRegex: /Words\.hk\.Honzi.[\d-]+.zip$/,
    fileNamePrefix: '[Honzi] ',
    addDate: false,
  },
  {
    url: 'https://api.github.com/repos/MarvNC/pixiv-yomitan/releases/latest',
    folderId: japaneseFolderId,
    includedNameRegex: /^Pixiv_[\d\-]+\.zip$/,
    removeNameRegex: /^Pixiv_[\d\-]+\.zip$/,
    fileNamePrefix: '[JA-JA Encyclopedia] ',
    addDate: false,
  },
];