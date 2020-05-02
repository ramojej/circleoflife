const { colors } = require("tailwindcss/defaultTheme")
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.blue,
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
