module.exports = {
    "globals": {
        "ga": true,
        "yaCounter": true,
        "ignoreCounters": true,
        "jsx": true,
        "jsxComponents": true
    },
    "plugins": [
        "dollar-sign"
    ],
    "rules": {
        // Отступ у нас по 4 пробела
        "indent": ["error", 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "no-return-assign": ["error"],
        // Максимальная длина строки 120 символов
        "max-len": ["error", 120],
        // Не настаиваем на использовании скобок с "толстой стрелкой"
        // то есть можно вот так:
        // someArray.filter(item => item.done);
        "arrow-body-style": 0,
        // Нельзя определять переменные и не использовать их
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        // Можно использовать switch без default
        "default-case": 0,
        // Это правило описывает наличие пустых строк в начале и конце блока
        // У нас нет такого обязательного условия
        "padded-blocks": 0,
        // Последовательность в том, что функция возвращает
        "consistent-return": ["error"],
        // Вызывать до декларирования можно функции, ибо hoisting
        "no-use-before-define": ["error", { "functions": false }],
        "no-confusing-arrow": ["error"],
        // Правило для правильного написания IIFE
        "wrap-iife": ["error", "inside"],
        // Запрещаем, некоторые фичи языка:
        // Не оставляем в коде команду debugger
        // Не используем with
        "no-restricted-syntax": [
            "error",
            "DebuggerStatement",
            "WithStatement"
        ],
        // Это правило о присвоении переменным именных функций
        // У него только два варианта:
        // функция может быть безымянной
        // либо может и не быть
        // отключаем во избежание путаницы
        "func-names": 0,
        // Без пробела перед скобочками функции
        "space-before-function-paren": ["error", "never"],
        // После ключевых слов (if, else, for, etc) должен быть хотя бы один пробел
        "keyword-spacing": ["error", {"overrides": {
            "catch": {
                "after": true
            }
        }}],
        // В коде не нужно оставлять console.log()
        "no-console": ["error", { "allow": ["warn", "error"] }],
        // Разрешаем перезаписывать переменные.
        // Примеры: тесты (прокидываем done), object destructuring (в реакте с редуксом)
        "no-shadow": 0,
        // Мы используем AMD модули
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        "import/no-amd": 0,
        // Мы подключаем как devDependencies, так и dependencies, проблем с этим нет
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": 0,
        // Не обязательно декларировать переменные в начале функции
        "vars-on-top": 0,
        // Мы используем нижнее подчеркивание для "приватных" методов у объектов
        "no-underscore-dangle": 0,
        // Мы не разрешаем пробелы до и после унарных операторов: !, !!, ++, --, ~
        "space-unary-ops": ["error"],
        // У нас нет пробелов внутри фигурных скобок
        "object-curly-spacing": ["error", "never"],
        // Оператор должен стоять перед переводом каретки
        "operator-linebreak": ["error", "after"],
        // Переменные с jQuery объектами должны начинаться с символа $
        "dollar-sign/dollar-sign": [2, "ignoreProperties"],
        // Мы поддерживаем 2 варианта переменной для контекста: "that", "self"
        "consistent-this": ["error", "that", "self"],
        // capIsNew: false, для корректного вызова синглтонов и зависимостей.
        // properties: false, для jQuery и Backbone с его $.Deferred() и new this.model();
        "new-cap": ["error", {
            "capIsNew": false,
            "properties": false
        }],
        // require можно вызывать не только из начала файла
        "global-require": 0,
        // Не обязываем переносить каждое звено цепочки на новую строчку
        "newline-per-chained-call": 0,
        // Ошибка о переназначении аргументов функции
        // Используем преимущественно для корректировки входных данных или установки значения по-умолчанию
        "no-param-reassign": 0,
        // Не используем кавычки для свойств объектов, только если без них никуда либо это зарезервированное слово
        "quote-props": ["error", "as-needed", {
            "keywords": true
        }],
        // Мы практически никогда не итерируемся по объектам-наследникам, поэтому hasOwnProperty избыточен
        "guard-for-in": 0,
        // Предупреждаем, если есть пустой блок
        "no-empty": ["error"],
        // Мы используем достаточно простые объекты и у нас нет проблемы с неправильной отработкой hasOwnProperty
        "no-prototype-builtins": 0,
        // Поддерживаем браузеры, в которых ключами не могут быть ключевые слова
        "dot-notation": ["error", { "allowKeywords": false }],
        // Иногда нужно просто создать инстанс класса для запуска его внутренней кухни
        "no-new": ["off"],
        // Свойства объектов всегда в camelCase
        "camelcase": ["error", { "properties": "always" }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        // Не рекомендуется писать операторы `a + b * c` без скобок, но допустимо ввиду большого объема легаси
        "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
        "no-alert": ["error"]
    }
};
