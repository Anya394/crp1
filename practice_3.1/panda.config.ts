import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./src/app/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  exclude: [],

  theme: {
    extend: {},
  },

  globalCss: {
    'html, body': {
      fontFamily: 'Inter, sans-serif',
      fontSize: '18px',
      lineHeight: '1.1',
    },
  },

  outdir: "styled-system",
});
