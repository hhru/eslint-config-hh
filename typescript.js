module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.d.ts'],
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            rules: {
                'react/prop-types': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': 'error',
                'no-void': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
            },
        },
    ],
};
