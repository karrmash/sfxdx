module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "airbnb",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'import/extensions': 'off',
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "react/prop-types": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
            }
        },

    }
};
