// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  image: {
    domains: ['res.cloudinary.com']
  },
  css: [
    // SCSS file in the project
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
});
