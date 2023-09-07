import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "cell": "500px"
      },
      fontFamily: {
        oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'banner-universe': "url('/assets/images/banner-background.svg')",
        "main-background": "url('/assets/images/body-background.svg')",
        "profile-background": "url('/assets/images/profile-background.svg')",
        "contact-background": "url('/assets/images/contact-background.svg')",
      },
      animation: {
        'scroll': "scroll 20s infinite"
      },
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(-100vw)'},
          '100%': {transform: 'translateX(0)'},
        }
      }
    },
  },
  plugins: [],
}
export default config
