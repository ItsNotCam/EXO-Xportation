/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    // require('cssnano'),
    require('tailwindcss'),
    require('postcss-nested')
  ]
}

module.exports = config