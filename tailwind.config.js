/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/**.html', 
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    data: {
      visible: `visible="true"`
    },
    extend: {
      objectPosition: {
        "exo-parallax-bg": "30% bottom" 
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        md: '0 0.05em 0.06em var(--tw-shadow-color)',
        lg: '0 0.037em 0.046em var(--tw-shadow-color)',
        bloom: '0 0 0.1em var(--tw-shadow-color)',
      },
      fontSize: {
        'em-0.1': '0.1em',
        'em-0.2': '0.2em',
        'em-0.3': '0.3em',
        'em-0.4': '0.4em',
        'em-0.5': '0.5em',
        'em-0.6': '0.6em',
        'em-0.7': '0.7em',
        'em-0.8': '0.8em',
        'em-0.9': '0.9em',
        'em-1.0': '1em',
        'em-1.1': '1.1em',
        'em-1.2': '1.2em',
        'em-1.3': '1.3em',
        'em-1.4': '1.4em',
        'em-1.5': '1.5em'
      },
      screens: {
        '720p': {'max': '1280px'},
        'home-lg': {'max': '1140px'},
        'home-md': {'max': '645px'},
        'home-sm': {'max': '450px'},
        'home-xs': {'max': '428px'},
        'nav': {"max": "960px"},
				'txt': {'max': '741px'},
				'1000': {'max': '1000px'},
				'1550': {'max': '1550px'}
      },
      lineHeight: {
        'em-0.1': '0.1em',
        'em-0.2': '0.2em',
        'em-0.3': '0.3em',
        'em-0.4': '0.4em',
        'em-0.5': '0.5em',
        'em-0.6': '0.6em',
        'em-0.7': '0.7em',
        'em-0.8': '0.8em',
        'em-0.9': '0.9em',
        'em-1.0': '1em',
        'em-1.1': '1.1em',
        'em-1.2': '1.2em',
        'em-1.3': '1.3em',
        'em-1.4': '1.4em',
        'em-1.5': '1.5em'
      },
      dropShadow: {
        "custom-lg": "2px 2px 2px rgba(0,0,0,0.4)",
        "custom-sm": "1px 1px 1px rgba(0,0,0,0.5)"
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "launch-col": "clamp(350px, 80vw, 600px)"
      },
      colors: {
        exo: {
          light: {
            100: "#FFFFFF",
            200: "#E0E0E0",
            300: "#D3D3D3",
            400: "#AAAAAA"
          },
          dark: {
            500: "#121212",
            900: "#080808"
          }
        }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    })
  ],
};
