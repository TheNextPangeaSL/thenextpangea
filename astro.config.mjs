import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  site: "https://bacsi.thenextpangea.com",
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    // Use sharp for image optimization (already installed)
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          // Ensure hashed filenames for better caching
          assetFileNames: "_astro/[name].[hash][extname]",
        },
      },
    },
  },
});
