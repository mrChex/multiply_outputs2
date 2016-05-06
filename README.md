Должно работать так:
```sh
$ npm run watch ua
```

должен собрать из энтри поинта (он для все одинаковый - index.js) сборку в которой учтутся все файлы *.js и *.ua.js.

Добавление/удаление новых файлов должно ловится.
```
import test from './test'
```

должен для ua импортировать либо test.js либо test.ua.js, если есть test.hr.js, но нет test.ua.js - ошибка

## git clone > npm install

## npm run-script build_all => create many bundles files from them folders
## npm run-script watch -- --ua(hr, en) => create bundle file and watch him for some country
