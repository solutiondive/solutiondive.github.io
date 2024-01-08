/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /col-.*/,
    },
    {
      pattern: /row-.*/,
    },
    {
      pattern: /flex/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /justify-.*/,
    },
    {
      pattern: /items-.*/,
    },
    {
      pattern: /grid-.*/,
    },
    {
      pattern: /gap-.*/,
    },
    {
      pattern: /border-.*/,
    },
    { pattern: /w-.*/ },
    { pattern: /h-.*/ },
    {
      pattern: /top*.*/,
    },
    {
      pattern: /bottom*.*/,
    },
    {
      pattern: /left*.*/,
    },
    {
      pattern: /right*.*/,
    },
    { pattern: /bg-.*/ },
    { pattern: /text-.*/ },
    {
      pattern: /p-.*/,
    },
  ],
  plugins: [],
};
