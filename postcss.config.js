/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/deprecation-warnings'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}

module.exports = config