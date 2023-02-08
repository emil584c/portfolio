/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      'primary-black': '#0c0b0b',
      'primary-grey': '#00000050',
      'primary-blue': '#005b91',
      'primary-cream': '#edf1e7',
      'primary-white': '#fbfbfb',
      'secondary-cream': '#e3e8dc',
      
    },

    extend: {
      fontFamily: {
        'rubik' :'Rubik'
      },
      spacing:{
        'zzz': '1px',
        'bbb': '2px',
        'ccc': '3px',
        'project': '430px',
        'project-phone': '386px',
        
      },
      maxWidth: {
        'phone': '322px',
        'textBox': '260px',
      },
    
      
    },
  },
  plugins: [],
}