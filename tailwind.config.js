/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['DynaPuff', 'cursive'],
        'secondary': ['Sen','sans-serif'],
      },
      colors: {
        'plt-blue': '#185ADB',
        'plt-cream': '#FFC947',
        'plt-dark': '#0A1931',
        'plt-lighterDark':'#0F2649',
        'plt-white': '#EFEFEF',
        'plt-darkcream': '#EEBB3F',
        'plt-darkblue': '#003FBB',
        'plt-darkercream': '#DFA519',
      },
      backgroundImage:{
        'blue-paws': "url('assets/icons/paws-blue.svg')",
        'cream-paws': "url('assets/icons/paws-cream.svg')",
        'svg-bg': "url('assets/images/backgroundSvg.svg')",
        'svg-bg-hd': "url('assets/images/headerBgSvg.svg')",
        'svg-bg-x': "url('assets/images/bgSvg1.svg')",
        'svg-pin': "url('assets/images/pin.svg')"
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      dropShadow: {
        '3xl': '1px 1px 1px rgba(0,0,0,0.50)',
        'layers': ['1px 1px 0 #808B96',
        '1px 2px 0 #D0D3D4']
      },
      boxShadow: {
        'cust': '2px 2px 10px  rgba(0,0,0,0.50)'
      },
      outlineWidth:{
        '50': '50px'
      },
      outlineOffset:{
        '30': '30px' 
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '100x300': 'repeat(auto-fit,  minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
}
