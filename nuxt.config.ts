// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            title: 'Portfolio',
        },
    },
    compatibilityDate: '2024-04-03',
    colorMode: {
        preference: 'light',
    },
    devtools: { enabled: true },
    modules: [
      '@nuxt/ui',
      '@nuxtjs/tailwindcss',
      '@nuxt/icon',
      '@nuxtjs/color-mode',
      '@nuxt/fonts',
      'vue3-carousel-nuxt',
    ],
    css: ['~/assets/css/global.css'],
})