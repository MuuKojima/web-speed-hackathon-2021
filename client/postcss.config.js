const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    cssnano({
      preset: 'default',
    }),
    postcssPresetEnv({
      stage: 3,
    }),
  ],
};
