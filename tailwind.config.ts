import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      xs: '375px',
      xxs: '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#4DE897",
        "gray-1": "#1B2420",
        'bg-app': '#F9F9F9',
        warning: '#F7931A',
        success: '#10B981',
        danger: '#D80027',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
          // barlow: ['Barlow Semi Condensed', 'sans-serif'],
      },
      fontSize: {
        xxxs: '.55rem',
        xxs: '.65rem',
        xsm: '13px'
      },
    }
  }
}