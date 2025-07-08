/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'section-height': '600px', // or any height you want
      },
      fontSize: {
        'course-details-heading-small': ['26px','36px'],
        'course-details-heading-large': ['36px','44px'],
        'home-heading-small': ['28px','34px'],
        'home-heading-large': ['48px','56px'],
        'default': ['15px', '21px'],
      },
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      maxWidth: {
        'course-card': '400px', // or any width you want
      },
      boxShadow: {
        'custom-card': '0 4px 15px 2px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
