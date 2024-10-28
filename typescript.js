module.exports = {
    plugins: ['@typescript-eslint', 'etc'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
            },
        ],
        'no-void': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'etc/prefer-interface': ['error', { allowLocal: true }],
        'etc/no-misused-generics': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: ['typeLike', 'enumMember'],
                format: ['PascalCase'],
            },
        ],
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: false }],
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
        '@typescript-eslint/no-duplicate-type-constituents': 'off',
    },
};
