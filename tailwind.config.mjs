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
        solid:
          "1px 1px 0px 1px var(--accent-light), 5px 5px 0px 2px var(--text)",
      },
      fontFamily: {
        line: "Linefont",
        josefin: "Josefin Sans",
      },
    },
  },
  plugins: [],
};
