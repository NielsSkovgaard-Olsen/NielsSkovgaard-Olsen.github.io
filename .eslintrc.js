module.exports = {
    "extends": ["airbnb","prettier","prettier/react"],
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true
    },
    "rules": {
        "no-console": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "import/extensions": 0
    },
    "plugins": [
        "react",
        "prettier",
        "jsx-a11y"
    ]
};

/*
{
    "plugins": [
      "html",
      "jquery",
      "react"
   ],

    "extends": [
      "eslint:recommended",
      //"google",
      "jquery"
    ],

    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },

//new3
//"parser": "babel-eslint",

// new2
  "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          experimentalObjectRestSpread: true
      }
  },

//new
//    "parserOptions": {
//      "ecmaVersion": 6,
//      "sourceType": "module"
//    },

    "globals": {
      $: false
    },

    "rules": {
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "no-caller": 1,
      "linebreak-style": 0,
      'prefer-arrow-callback': 0,
      'no-var': 0,
      'eslint no-mixed-spaces-and-tabs': 0,
      "spaced-comment": 0,
      "no-mixed-spaces-and-tabs": 0,
      "one-var": 0,
      "space-in-parens": 0,
      "curly": 0,
      "jquery/no-ajax": 2,
      "no-alert": 0,
      "computed-property-spacing": 0,
      "array-bracket-spacing": 0,
      "no-console": 1,
      "jquery/no-animate": 2,
      "jquery/no-attr": 0,
      "jquery/no-bind": 2,
      "jquery/no-class": 2,
      "jquery/no-clone": 2,
      "jquery/no-closest": 2,
      "jquery/no-css": 2,
      "jquery/no-data": 2,
      "jquery/no-deferred": 2,
      "jquery/no-delegate": 2,
      "jquery/no-each": 2,
      "jquery/no-fade": 2,
      "jquery/no-filter": 2,
      "jquery/no-find": 2,
      "jquery/no-global-eval": 2,
      "jquery/no-has": 2,
      "jquery/no-hide": 2,
      "jquery/no-html": 0,
      "jquery/no-in-array": 2,
      "jquery/no-is": 2,
      "jquery/no-load": 2,
      "jquery/no-map": 2,
      "jquery/no-merge": 2,
      "jquery/no-param": 2,
      "jquery/no-parent": 2,
      "jquery/no-parents": 2,
      "jquery/no-parse-html": 2,
      "jquery/no-prop": 2,
      "jquery/no-proxy": 2,
      "jquery/no-ready": 1,
      "jquery/no-serialize": 2,
      "jquery/no-show": 2,
      "jquery/no-size": 2,
      "jquery/no-sizzle": 2,
      "jquery/no-slide": 2,
      "jquery/no-submit": 2,
      "jquery/no-text": 0,
      "jquery/no-toggle": 2,
      "jquery/no-trigger": 2,
      "jquery/no-trim": 2,
      "jquery/no-val": 0,
      "jquery/no-when": 2,
      "jquery/no-wrap": 2,
      "quotes": 0,
      "lines-around-comment": 1,
      "no-unreachable": 1
    }
}
*/
