const tailwindNested = require('tailwindcss/nesting');
const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
const forLoop = require ('postcss-for');
const vars = require('postcss-simple-vars');
const rand = require('postcss-random');
const lost = require('lost');
const resetCss = require('postcss-css-reset');

const config = {
  plugins: [ tailwindNested,tailwindcss(),autoprefixer,resetCss,forLoop ,vars, rand,  lost],
};

module.exports = config;
