// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'radix-vue/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-vuefire',
    'notivue/nuxt'
  ],
  css: [
    '~/assets/css/main.css',
    'notivue/notifications.css',
    'notivue/animations.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  vuefire: {
    auth: { enabled: true, sessionCookie: true },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId
    }
  },
  notivue: {
    position: 'top-right',
    limit: 1,
    notifications: {
      global: {
        duration: 10000
      }
    }
  }
})
