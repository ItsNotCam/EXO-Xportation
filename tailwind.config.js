/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
			colors: {
				custom: {
					light: {
						100: "#FFFFFF",
						200: "#E0E0E0",
						300: "#D3D3D3",
						400: "#AAAAAA"
					},
					dark: "#121212"
				}
			},
		},
  },
  plugins: [],
}

