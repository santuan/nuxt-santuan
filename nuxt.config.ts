// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  image: {
    domains: ["res.cloudinary.com"],
  },
  css: [
    // SCSS file in the project
    "~/assets/css/main.css",
  ],
  tailwindcss: {
    config: {
      /* Extend the Tailwind config here */
      theme: {
        fontFamily: {
          serif: ["Yeseva One", "serif"],
          mono: ["Space Mono", "mono"],
        },
      },
      plugins: [
        require('@tailwindcss/typography'),
      ],
    }
  },
  googleFonts: {
    families: {
      'Yeseva+One': true,
      'Space+Mono': [100, 300],
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  buildModules: ["@nuxtjs/google-fonts"],
  build: {
    transpile: ["@headlessui/vue"],
  },
});
