// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import redirects from "./redirects.mjs";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://florian-lefebvre.dev",
  integrations: [tailwind(), mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },

  redirects: {
    ...Object.fromEntries(
      Object.entries(redirects).map(([from, destination]) => [
        from,
        {
          destination,
          status: 308,
        },
      ])
    ),
  },

  output: "static",
  adapter: netlify(),
});
