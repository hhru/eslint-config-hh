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
    "rules": {
        // Отступ у нас по 4 пробела
        "indent": ["error", 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
        // return не должен содержать присвоение,
        // однако, это не удобно вот в таком случае:
        // setProperty = (newValue) => property = newValue;
        // поэтому не ошибка, но предупреждение
        "no-return-assign": ["warn"],
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
        "consistent-return": ["warn"],
        // Вызывать до декларирования можно функции, ибо hoisting
        "no-use-before-define": ["error", { "functions": false }],
        // "толстая стрелка" очень похожа на операторы сравнения (>, <, <=, и >=)
        // предупреждаем в случае если код выглядит схоже
        "no-confusing-arrow": ["warn"],
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
        // Не проверяем на первую заглавную букву на свойствах объектов
        // иначе использование $.Deferred(); будет считаться ошибкой
        "new-cap": ["error", {
            "properties": false
        }],
        // require можно вызывать не только из начала файла
        "global-require": 0,
        // Не обязываем переносить каждое звено цепочки на новую строчку
        "newline-per-chained-call": 0,
        // Ошибка о переназначении аргументов функции
        "no-param-reassign": ["error", { "props": false }],
        // Не используем кавычки для свойств объектов, только если без них никуда либо это зарезервированное слово
        "quote-props": ["warn", "as-needed", {
            "keywords": true
        }],
        // Не выводим ошибку если в цикле for in не проверяется на hasOwnProperty (только предупреждение)
        "guard-for-in": ["warn"],
        // Предупреждаем, если есть пустой блок
        "no-empty": ["warn"],
        // Мы используем достаточно простые объекты и у нас нет проблемы с неправильной отработкой hasOwnProperty
        "no-prototype-builtins": 0,
        // Хотим при необходимости обращаться к свойствам объекта через `[]`
        "dot-notation": ["off"]
    }
};
