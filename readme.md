# eslint конфиги hh.ru

Репозиторий содержит файлы конфигурации для eslint.

## Установка конфигов

Проекты подтягивают этот репозиторий через npm-зависимость.

Cсылка на конфиг прописывается в `.eslintrc` проекта:
```json
{
    "extends": "@hh.ru/eslint-config"
}
```

Для поддержки TypeScript нужно создать блок overrides
```json
{
    "overrides": [
        {
            "files": "*.{ts,tsx}",
            "extends": "@hh.ru/eslint-config/typescript",
        },
    ],
}
```

## Релиз новой версии

Перед релизом надо прописать историю изменений в `readme.md`, а так же проставить новую версию в `package.json`.

Конфиги релизятся в публичный npm репозиторий, командой `npm publish`

Чтобы залогинится для публикации версии, надо выполнить команду `npm adduser`, логин и пароль запрашивать у [этих людей](https://wiki.hh.ru/pages/viewpage.action?pageId=119046554)


## История изменений

### 12.0.0

* Добавлено правило, запрещающее абсолютные импорты less-файлов

### 11.1.0

* Добавлено правило, разрешающее импорт less-файлов из текущей папки по относительному пути

### 11.0.0

* Добавлены правила отключающие обязательность импорта React при объявлении jsx

### 10.1.0

* В TS-конфиг добавил правило для нейминга классов, енамов, интерфейсов и типов

### 10.0.1

* Поднял версии TS-зависимостей

### 10.0.0

* Добавлен конфиг для TypeScript

### 8.1.1

* Обновлен lodash в зависимостях на 4.17.19

### 8.1.0

* Запрещены non-ascii символы в идентификаторах

### 7.0.1

* Запрет относительных импортов реализован с помощью правила no-restricted-imports вместо no-restricted-syntax

### 7.0.0

* Запрещены относительные импорты

### 6.1.0
* Подняты версии зависимостей для поддержки eslint 6:
    * babel-eslint
    * eslint-plugin-dollar-sign
    * eslint-plugin-import
    * eslint-plugin-react-hooks


### 6.0.0
* Добавлено правило `exhaustive-deps` для `react-hooks`
* Поднята версия зависимости [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

### 5.0.2
* Запрещены для использования относительные импорты в родительскую директорию (содержащие `..`)
* Поднята версия зависимости [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) для поддержки eslint `5.x`
* Добавлены правила для [react hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* Добавлена peerDependency на `eslint >= 4.12.1`

### 4.0.0

* Запрещены для использования
  * [curly](https://eslint.org/docs/rules/curly) всегда error
  * Reflect
  * Array.from в пользу spread
  * Proxy
  * WeakMap
  * WeakSet
  * typed arrays
  * Generators
* В качестве парсера используется [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* В [parserOptions](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) включены модули и jsx
* В no-unused-vars включен [ignoreRestSiblings](https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings)

### 3.0.0

* Поправил конфиг для es6:
  * Добавил env browser и amd
  * no-multiple-empty-lines уменьшил кол-во пустых строк до 1 и до 0 в начале файла
  * no-restricted-properties выключил т.к. у airbnb запрещено использовать isNaN и Math.Pow
  * arrow-parens - всегда используем () вокруг аргумента
  * сгенерировал один конфиг файл для es6
  * dot-notation разрешил использование allowKeywords (можно писать .catch())
* удалил index.js и legacy.js теперь main из package.json указывает на base.js

### 2.0.0

* Все правила переведены в error.
* Отключены правила:
  * no-param-reassign — переназначем преимущественно для простановки значения по-умолчанию или корректировки входных
    данных, нет смысла запрещать.
  * guard-for-in — у нас практически нет наследуемых объектов, нет смысла добавлять в каждом месте hasOwnProperty ради
    линтинга.
* Для правила no-plusplus разрешаем `++`/`--` в циклах.

### 1.6.0

* Слили репы с es5 конфигом в одну

### 1.5.0

* Прописали `env` свойство
* Обновили airbnb и зависимости

### 1.4.0

* Переводим `no-plusplus` в warn.
* Переводим `no-mixed-operators` в warn, допускаем ввиду большого объема легаси.

### 1.3.0

* Отключаем `dot-notation` для ключевых слов для совместимости со старыми браузерами.
* Отключаем `no-new`, иногда нужно просто создать экземпляр класса для запуска его внутренней кухни.
* В свойствах объектов всегда используем camelCase.

### 1.1.0

* Оставляем только поддержку es6

### 1.0.0

* Первичный релиз
* Без поддержки es6
