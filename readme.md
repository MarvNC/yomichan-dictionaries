# Yomichan Dictionaries <!-- omit in toc -->

- [Term Dictionary](#term-dictionary)
  - [niconico-pixiv slang](#niconico-pixiv-slang)
  - [複合語起源](#複合語起源)
- [Term Frequency](#term-frequency)
  - [jpdb Frequency Dictionary](#jpdb-frequency-dictionary)
- [Kanji Info](#kanji-info)
  - [jpdb Kanji](#jpdb-kanji)
- [Kanji Variants](#kanji-variants)
  - [mozc](#mozc)
  - [jitai](#jitai)
- [Kanji Frequency](#kanji-frequency)
  - [Innocent Corpus Kanji Frequency](#innocent-corpus-kanji-frequency)
  - [jpdb Kanji Frequency](#jpdb-kanji-frequency)

## Term Dictionary

### [niconico-pixiv](https://github.com/ncaq/dic-nico-intersection-pixiv) slang

Using the information [gathered by ncaq](https://github.com/ncaq/dic-nico-intersection-pixiv) for use in an IME, this is a dictionary that can help parse cultural references and slang that are in either [niconico](https://dic.nicovideo.jp/) or [pixiv](https://dic.pixiv.net/)'s online dictionaries. According to the original source, entries were excluded based on some measure of usefulness so this does not contain every single thing in pixiv or niconico, which would have been too many.

> ルールベースで IME 辞書の役に立たなそうな単語を除外しています。

![](<!images/chrome_%E3%82%86%E3%81%9A%E3%82%BD%E3%83%95%E3%83%88_(%E3%82%86%E3%81%9A%E3%81%9D%E3%81%B5%E3%81%A8)%E3%81%A8%E3%81%AF%E3%80%90%E3%83%94%E3%82%AF%E3%82%B7%E3%83%96%E7%99%BE%E7%A7%91%E4%BA%8B%E5%85%B8%E3%80%91_-_httpsdic.pixiv.net_2022-08-21_17-22-10.png>)

### 複合語起源

(Yomichan dictionary soon)

<!-- Download | -->

**[List of words](termOrigins/%E8%A4%87%E5%90%88%E8%AA%9E%E8%B5%B7%E6%BA%90.tsv)**

Compound kunyomi word origins, for example 陥る -> 落ち入る（おち|いる）. Information comes from anonymous forum posts, so it may not be 100% accurate.

**Sources:**

- [shitaraba](https://jbbs.shitaraba.net/bbs/read.cgi/study/10958/1299762655/)
- [5ch](https://academy6.5ch.net/test/read.cgi/gengo/1228873581/)
- [Wanikani](https://community.wanikani.com/t/special-kanji-words-derived-from-other-words/35655)

## Term Frequency

### [jpdb Frequency Dictionary](https://github.com/MarvNC/jpdb-freq-list)

**[Download](https://github.com/MarvNC/jpdb-freq-list/releases)**

A frequency dictionary based on information from https://jpdb.io.

<!--
aozora bunko kanji/jukugo
 -->

## Kanji Info

### [jpdb](https://jpdb.io) Kanji

**[Download](https://github.com/MarvNC/yomichan-dictionaries/raw/master/dl/%5BKanji%5D%20JPDB%20Kanji.zip)**

Kanji information from https://jpdb.io:

- the 15 most common vocab applicable
- the kanji decomposition according to jpdb (has inaccuracies because it's meant for memorizing keywords)
- 漢字検定 level
- 旧字体/新字体/拡張新字体 character form

![](!images/chrome_%E4%B9%B1_-_Yomichan_Search_-_Google_Chrome_2022-08-10_19-29-01.png)

<!-- ### The Kanji Map

A Yomichan kanji dictionary created using the data from [The Kanji Map](https://github.com/gabor-kovacs/the-kanji-map) providing radical information and kanji decompositions. -->

## Kanji Variants

### [mozc](https://github.com/google/mozc)

**[Download](https://github.com/MarvNC/yomichan-dictionaries/raw/master/dl/%5BKanji%5D%20mozc%20Kanji%20Variants.zip)**

A kanji dictionary made from the kanji variant information in Google's [mozc](https://github.com/google/mozc) Japanese IME. Includes information about:

- 異体字
- 印刷標準字体
- 簡易慣用字体
- 旧字体
- 略字
- 正字
- 俗字
- 別字
- 本字

![](!images/chrome_%E9%AB%94_-_Yomichan_Search_-_Google_Chrome_2022-08-19_20-22-19.png)

### [jitai](https://github.com/epistularum/jitai)

**[Download](https://github.com/MarvNC/yomichan-dictionaries/raw/master/dl/%5BKanji%5D%20jitai.zip)**

A Yomichan kanji dictionary made using the data from [jitai](https://github.com/epistularum/jitai). This allows you to see information about 旧字体, 新字体, 拡張新字体, and 標準字体 variants from the kanji page in Yomichan.

![](!images/chrome_%E4%B9%B1_-_Yomichan_Search_-_Google_Chrome_2022-08-10_19-28-54.png)

## Kanji Frequency

### Innocent Corpus Kanji Frequency

**[Download](https://github.com/MarvNC/yomichan-dictionaries/raw/master/dl/%5BKanji%20Frequency%5D%20Innocent%20Corpus%20Kanji.zip)**

Uses the [innocent corpus frequency list](https://web.archive.org/web/20190309073023/https://forum.koohii.com/thread-9459.html#pid168613) that is distributed with [Yomichan](https://github.com/FooSoft/yomichan#dictionaries) to create a rank-based kanji frequency dictionary. This was created because the existing one is an occurence-based list and does not display ranks.

- The displayed frequency in Yomichan will contain the frequency rank followed by the occurence count, for example `4686 (57)` for 壟 indicating it's the 4686th most common kanji and appeared 57 times total in the 5000+ novels in Innocent Corpus.

### [jpdb](https://jpdb.io) Kanji Frequency

**[Download](https://github.com/MarvNC/yomichan-dictionaries/raw/master/dl/%5BKanji%20Frequency%5D%20JPDB%20Kanji.zip)**

Kanji frequency data from https://jpdb.io.
