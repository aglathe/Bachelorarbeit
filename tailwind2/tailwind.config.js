/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*"],
  theme: {
    colors: {
      'text-light': "#190b30",
      'text-dark':"#717c89",
      'bg-light': "#BCC1C8",
      'bg-dark':"#0A0410",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms')
],
}

