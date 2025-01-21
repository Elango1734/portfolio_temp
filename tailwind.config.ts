import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'rgba(13, 143, 129)',
        primary_transparent: 'rgba(13, 143, 129, 0.5)',
        dark_transparent: 'rgba(0, 0, 0, 0.4)',
        texthead: '#ffffff',
        bodytext: '#a3a3a3',
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
} satisfies Config;
