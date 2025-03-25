module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-var': 1, 
    },
    "overrides": [
        {
            "files": ["public/**/*.js"],
            "rules": {
                "no-use-before-define": ["off"],
                "max-lines-per-function": ["off"]
            }
        }
    ],
    "ignorePatterns": ["public/**/*.js",".eslintrc.js"]
}
