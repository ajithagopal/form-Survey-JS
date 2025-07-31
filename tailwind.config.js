module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          500: '#F43F5E',
      },
      emerald: {
          500: '#00A884',
          600: '#009677',
      }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
],
};
