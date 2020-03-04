// eslint-disable-next-line import/no-extraneous-dependencies
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            "./src/**/*.jsx",
            "./public/index.html",
            "./node_modules/bootstrap/js/dist/collapse.js"
          ],
          whitelistPatternsChildren: [/navbar.*/],
          variables: true // removes default Bootstrap colours
        })
      ]
    }
  }
};
