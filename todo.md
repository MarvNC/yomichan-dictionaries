<!-- - [x] if simp/trad form exist, check for presence in list and add if not
- [x] if find "used in vocab" with new kanji, add that kanji to list
  - nvm
- [x] add composed of/included in kanji (check for existence of included in kanji, fetch bigger page if necessary?)
  - nvm to included in
- [ ] check jpdb freq list for all kanji used, if not insane number just use that as base
  - nvm dont feel like it
- [ ] use thekanjimap data for thekanjimap kanji dict
- [ ] dict converter
  - [ ] limit to 10 vocab, show more link to jpdb -->


- [x] use innocent corpus occurence based to get precise kanji values
  - [x] also display count of occurences
  - [x] NVM it already has a kanji_meta_bank with kanji frequencies thx
  - [x] https://web.archive.org/web/20190309073023/https://forum.koohii.com/thread-9459.html#pid168613
    - [x] 6430 kanji used, so more expansive than jpdb?
- [ ] get kanken https://github.com/bhffmnn/kanken-json
- [x] get shinjitai/kyuujitai/itaiji https://github.com/epistularum/jitai
  - [x] also use jpdb data, some stuff not in jitai but keiyoujitai not in jpdb
- [ ] get components/used in thekanjimap https://github.com/gabor-kovacs/the-kanji-map/tree/main/data
  - [ ] also add radicals' entries from it hopefully, maybe separate dic for meaning/etc info

- [ ] check how to bold - 草津温泉 has example

- [ ] get from wiktionary JP 呉音 漢音 唐音 etc info in a new dict

- [ ] remove misc bloat from KANJIDIC (nvm maybe not)
  - read tag bank, remove elems from stats object corresponding to class/code/indices

- [ ] convert the kanji dicts to proper kanji dicts

- [ ] kotoba memes: use innocent list, aggregate every single mono dict, get terms with a kanji with certain freq (>3000?), under 4 chars.

- [ ] jpdb separate onyomi using KANJIDIC also scrape 'used in' kanji
  - [ ] also add count of total vocab for that word

- [x] itaiji (maybe dont need the one with all that chinese)
  - [x] https://www.tobunken.go.jp/archives/%E7%95%B0%E4%BD%93%E5%AD%97%E3%83%AA%E3%82%B9%E3%83%88/
  - [x] https://wwwap.hi.u-tokyo.ac.jp/ships/itaiji_list.jsp
  - [ ] NVM google mozc data probably better and less useless chinese

- [ ] pixiv/niconico parsing/link only dict (check grammar dicts for link example)
  - [ ] https://github.com/ncaq/dic-nico-intersection-pixiv

- [ ] https://ankiweb.net/shared/info/1417078570 kanji def/成り立ち/etc (龗 included there, not KANJIDIC, check)

- [ ] aozora bunko frequency http://vtrm.net/assets/aozora-kanji-frequency.txt
- [ ] wikipedia kanji freq https://scriptin.github.io/kanji-frequency/

- [ ] word origins

- [ ] jmdict utils - get deinflectors, on/kun

- [ ] kanjidamage/wanikani similar looking kanji

- [ ] yoji tags (combine the two yoji dicts)
  - [ ] anki tagging