export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      charset: "utf-8",
      title: "STN",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Diseño y software libres" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  image: {
    domains: ["res.cloudinary.com"],
  },
  css: [
    // SCSS file in the project
    "~/assets/css/main.css",
    "@fontsource/yeseva-one",
    "@fontsource/space-mono",
  ],
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
      theme: {
        fontFamily: {
          serif: ["Yeseva One", "serif"],
          mono: ["Space Mono", "mono"],
        },
      },
      plugins: [require("@tailwindcss/typography")],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  build: {
    transpile: ["@headlessui/vue"],
  },
});
