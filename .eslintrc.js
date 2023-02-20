module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],

    'rules': {
        'indent': [
            'error',
            2
        ],
        "space-in-parens": ["error", "never"],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        "array-element-newline": ["error", {
            "ArrayExpression": "consistent",
            "ArrayPattern": { "minItems": 3 },
        }],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
        "object-curly-spacing": ["error", "always"],
        "prefer-template": 'error',
        "key-spacing": ["error", { "afterColon": true }],

    }
};
