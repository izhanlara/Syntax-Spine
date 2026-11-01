// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es-es",
    locales: ["es-es", "en-en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@styles": "/src/styles",
        "@services": "/src/services",
        "@libs": "/src/libs",
        "@models": "/src/models",
        "@i18n": "/src/i18n",
      },
    },
    ssr: {
      noExternal: ["package-name"],
    },
  },
});
