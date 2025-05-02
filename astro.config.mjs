import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://CommunityCommodityComputerCoaching.github.io',
  base: '/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  
  server: {
    host: true
  },

  vite: {
    server: {
      host: true,
      hmr: {
        host: 'localhost',
        clientPort: 4321 // local development port for previewing, port 4000 is used for production.
      },
      network: "host",
      allowedHosts: true
    },
  },
});
