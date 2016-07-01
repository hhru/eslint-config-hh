module.exports = {
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    "extends": "airbnb-base",
    "globals": {
        "ga": true,
        "yaCounter": true,
        "ignoreCounters": true,
        "jsx": true,
        "define": true,
        "jsxComponents": true,
        "module": true
    },
    "plugins": [
        "dollar-sign"
    ],
    "parserOptions": {
        // Мы еще не используем ES6 модули,
        // поэтому эта настройка нужна для того чтобы корректно отрабатывало правило `strict`
        "sourceType": "script"
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "no-return-assign": 0,
        "max-len": ["error", 120],
        // Мы не особо хотим делать так:
        // const data = [];
        // data[123] = '3'
        // Логичнее смотрится:
        // let data = [];
        // data[123] = '3'
        // http://eslint.org/docs/rules/prefer-const
        "prefer-const": 0,
        "arrow-body-style": 0,
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        "default-case": 0,
        "padded-blocks": 0,
        // Последовательность в том, что функция возвращает
        // http://eslint.org/docs/rules/consistent-return
        "consistent-return": ["warn"],
        // Вызывать до декларирования можно функции, ибо hoisting
        "no-use-before-define": ["error", { "functions": false }],
        "no-confusing-arrow": 0,
        "wrap-iife": ["error", "inside"],
        "no-restricted-syntax": [
            "error",
            "DebuggerStatement",
            "WithStatement"
        ],
        "func-names": 0,
        "space-before-function-paren": ["error", "never"],
        "keyword-spacing": ["error", {"overrides": {
            "catch": {
                "after": true
            }
        }}],
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-shadow": 0,

        // Мы используем AMD модули
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        "import/no-amd": 0,
        // Все еще используем 'use strict'
        // http://eslint.org/docs/rules/strict
        "strict": ["error", "function"],
        // Не обязательно декларировать переменные в начале функции
        "vars-on-top": 0,
        // Мы используем нижнее подчеркивание для "приватных" методов у объектов
        // http://eslint.org/docs/rules/no-underscore-dangle
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
        // Не проверяем на первую заглавную букву на свойствах объектов
        // иначе использование $.Deferred(); будет считаться ошибкой
        "new-cap": ["error", {
            "properties": false
        }],
        // require можно вызывать не только из начала файла
        "global-require": 0,
        // Не обязываем переносить каждое звено цепочки на новую строчку
        "newline-per-chained-call": 0,
        // Не выводим ошибку при переназначении аргументов функции (только предупреждение)
        // Потому что хотим использовать вот так:
        // function(options) {
        //     options = options || {};
        // }
        "no-param-reassign": ["warn"],
        // Не используем кавычки для свойств объектов, только если без них никуда либо это зарезервированное слово
        "quote-props": ["error", "as-needed", {
            "keywords": true
        }],
        // Не выводим ошибку если в цикле for in не проверяется на hasOwnProperty (только предупреждение)
        "guard-for-in": ["warn"],


        /*
         * Ниже перечислены правила, которые нужно убрать после перехода на es6
         */

        // Запятую в последнем свойстве объекта не ставим
        // Из-за того, что поддерживаем IE8 - выводим ошибку
        "comma-dangle": ["error", "never"],
        // Для колбеков "толстые стрелки" выглядят компактнее,
        // но у нас много легаси просто с безымянными функциями, поэтому не будем на этом настаивать
        "prefer-arrow-callback": 0,
        // Пока не настаиваем на использовании let
        "no-var": 0,
        // Пока не настаиваем на использовании ...rest
        "prefer-rest-params": 0,
        // Можно без строк шаблонов
        "prefer-template": 0,
        // Легаси, не настаиваем на сокращенной форме объекта
        // http://eslint.org/docs/rules/object-shorthand
        "object-shorthand": 0
    }
};
