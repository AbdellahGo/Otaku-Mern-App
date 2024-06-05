/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      Msm: { 'max': '575.98px' },
      Mmd: { 'max': '767.98px' },
      Mlg: { 'max': '991.98px' },
      Mxl: { 'max': '1199.98px' },
    },
    fontFamily: {
      BeVietnamPro: ['"Be Vietnam Pro"', 'sans-serif'],
    },
    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      22: '22px',
      32: '32px',
      33: '33px',
      48: '48px',
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    colors: {
      
      white: '#FFFFFF',
      darkBlueGray: '#111921',
      lightGray: '#E5E8EA',
      brightBlue: '#1A80E5',
      darkSlateBlue: '#233547',
      grayBlue: '#243647',
      darkGrayBlue: '#102233',
      lightSteelBlue: '#93ADC6',
      veryDarkBlueGray: '#121A21',
      lightSkyBlue: '#94ADC7',
      vividBlue: '#197FE5',
      deepSlateBlue: '#334C66',
      },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  plugins: [],
}

