const autoprefixer = require("autoprefixer");
const nested = require('postcss-nested');
const forLoop = require ('postcss-for');
const vars = require('postcss-simple-vars');
const rand = require('postcss-random');
const lost = require('lost');
const resetCss = require('postcss-css-reset');

const config = {
  plugins: [autoprefixer,resetCss,forLoop , rand,  vars ,nested, lost],
};

module.exports = config;
