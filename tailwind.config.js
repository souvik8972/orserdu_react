

// config 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#FFD506",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
         mint_green:'#CBF0E3',
        light_mint_green:"#E0FAF3",
        dark_green:"#006937",
        list_color:"#6bcdb2",
        light_gray:"#F6F6F6",
        green_bar:'#70C7AF'
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        sofiaSansSemiCondensed: [
          "Sofia Sans Semi Condensed",
          "Lato",
          "sans-serif",
        ],
        monospace: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        base: "1rem", // equivalent to 16px
      },
      fontWeight: {
        light: 300,
        bold: 900,
        regular: 400,
      },
      lineHeight: {
        relaxed: "1.5", // Line height used in `body`
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1023px",
        xxl: "1280px",
        xxxl: "1600px",
      },
      spacing: {
        swiperNavigation: "44px",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #087141, #6bcdb2)',
      },
    },
  },
  
  plugins: [
   
  ],

}
