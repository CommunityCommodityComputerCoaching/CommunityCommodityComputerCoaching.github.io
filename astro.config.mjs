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
    host: '0.0.0.0',
    port: 4321
  },

  vite: {
    server: {
      host: '0.0.0.0',
      hmr: {
        clientPort: 4321,
        host: '0.0.0.0'
      },
      watch: {
        usePolling: true
      },
      allowedHosts: [
        '0.0.0.0',
        '.orb.local'
      ]
    }
  }
});
