// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },
  colorMode: {
    preference: 'dark',   // ALWAYS dark
    fallback: 'dark',
    classSuffix: '',      // results in `.dark` instead of `.dark-mode`
    storageKey: null,     // disables localStorage
  },

  compatibilityDate: "2025-01-15",

  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
