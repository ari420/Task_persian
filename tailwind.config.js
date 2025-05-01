module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for app directory
    "./components/**/*.{js,ts,jsx,tsx}", // your components
    "./src/**/*.{js,ts,jsx,tsx}", // if you're using /src
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
       headerText: "#00000050",
       button: "#7A3DE2",
      },
    },
  },
  plugins: [],
};