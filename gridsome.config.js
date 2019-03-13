// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: []
};

const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind("./tailwind.js")];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
