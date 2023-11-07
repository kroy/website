/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-dark": "var(--accent-dark)",
        background: "var(--background)",
        link: "var(--link)",
        pop: "var(--pop)",
        text: "var(--text)",
      },
      boxShadow: {
        solid: "5px 5px 0px 2px",
      },
      fontFamily: {
        line: "Linefont",
      },
    },
  },
  plugins: [],
};
