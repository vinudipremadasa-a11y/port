// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://vinudipremadasa-a11y.github.io/port/",
  base: "/port/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
