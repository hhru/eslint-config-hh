module.exports = {
    "extends": [
        // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
        "airbnb-base/legacy",
        require.resolve("./base")
    ],
    "parserOptions": {
        // Не используем ES6 модули,
        // поэтому эта настройка нужна для того чтобы корректно отрабатывало правило `strict`
        "sourceType": "script"
    },
    "env": {
        "node": true,
        "browser": true,
        "amd": true
    },
    "rules": {
        // Используем 'use strict'
        "strict": ["error", "function"]
    }
};
