import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "Tree Studio",
        name: "Tree Studio",
        icons: [
          {
            src: "./favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      },
      workbox: {
        // globPatterns: ["**/*.{js,css,html,ico,png,svg,json,mp4,jpg,jpeg,webp,ttf}"],
        // maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        // runtimeCaching: [
        //   {
        //     handler: 'CacheFirst',
        //     urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
        //     options: {
        //       cacheName: 'image-ex-cache',
        //       expiration: {
        //         maxAgeSeconds: 60 * 60 * 24 * 30, // 1m
        //       },
        //       cacheableResponse: {
        //         statuses: [0, 200]
        //       }
        //     }
        //   }
        // ]
      },
      
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
