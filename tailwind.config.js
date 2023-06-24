module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "3rem",
      },
    },
    fontFamily: {
      monoton: ["Monoton", "cursive"],
      satoshi: ['Satoshi', 'sans-serif'],
      clash: ['Clash Display', 'sans-serif'],
      infinite: ["Outfit", "sans-serif"],
      bebasneo: ['Bebas Neue', 'cursive'],
    },
    extend: {
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )",
        "glass-card": "4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)"
      },
      colors: {
        gradientLight: '#0077b6',  // Light blue
        gradientDark: '#023e8a',  // Dark blue
        // bg: {
        //   DEFAULT: "#0a0a0a",
        //   200: "#1b1b1b",
        //   300: "#2b2b2b",
        // },
        primary: {
          DEFAULT: "#BF6F16",
        //   50: "rgba(0, 36, 6, 0.1)",
        //   100: "rgba(0, 36, 6, 0.2)",
        //   200: "rgba(0, 36, 6, 0.3)",
        //   300: "rgba(0, 36, 6, 0.4)",
        //   400: "rgba(0, 36, 6, 0.5)",
        //   500: "rgba(0, 36, 6, 0.6)",
        //   600: "rgba(0, 36, 6, 0.7)",
        //   700: "rgba(0, 36, 6, 0.8)",
        //   800: "rgba(0, 36, 6, 0.9)",
        //   900: "rgba(0, 36, 6, 1)",
        },
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
      }),
    },
  },
  daisyui: {
    themes: [
      // {
      //   dark: {
      //     ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
      //     primary: "#14ffc8",
      //     "primary-focus": "#9effc4",
      //   },
      // },
      "dracula"
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
};
