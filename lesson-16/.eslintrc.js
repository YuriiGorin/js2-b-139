module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb-base",
    rules: {
        quotes: ["error", "double", { avoidEscape: true }],
        indent: ["error", 4],
        "no-underscore-dangle": [0],
        "class-methods-use-this": [0],
        "no-restricted-globals": [0],
        "no-alert": [0],
        "no-unused-vars": [0],
        "no-plusplus": [0],
        "no-restricted-syntax": [0],
    },
};

