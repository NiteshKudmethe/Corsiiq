module.exports = {
    darkMode: 'class', // important!

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JavaScript/TypeScript files
    "./public/index.html",  
           // Include index.html for static classes
  ],
  theme: {
    extend: {
            scrollBehavior: ['motion-safe'],

    },
  },
  plugins: [],
};
