// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "CO-Tournament",
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/ui", "@pinia/nuxt", "@nuxtjs/google-fonts"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Space_Grotesk: [400, 500, 600],
    },
    display: "swap",
    preload: true,
    download: true,
  },

  devServer: {
    host: "0.0.0.0", // expose to network
    port: 3000,
  },

  routeRules: {
    "/": { prerender: true },
  },
  colorMode: {
    preference: "dark", // ALWAYS dark
    fallback: "dark",
    classSuffix: "", // results in `.dark` instead of `.dark-mode`
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
