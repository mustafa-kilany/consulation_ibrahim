// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Poppins: [300, 400, 500, 600, 700],
      Cairo: [300, 400, 500, 600, 700],
      'IBM Plex Arabic': [300, 400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'Strategic Consulting - Transforming Visions into Reality',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Expert consulting in feasibility studies, strategic planning, and project evaluation for national-scale infrastructure development' }
      ]
    }
  }
})
