// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineNuxtConfig({
  ssr: true,

  app: {
    baseURL: '/',
    head: {
      title: process.env.APP_TITLE,
      htmlAttrs: {
        lang: process.env.APP_DEFAULT_LANG,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.APP_DESC },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: process.env.APP_TITLE },
        { property: 'og:description', content: process.env.APP_DESC },
        { property: 'og:site_name', content: process.env.APP_TITLE },
        { property: 'og:locale', content: process.env.APP_DEFAULT_LANG },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image', content: `/og_image.jpg` },
        // { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `/favicon.ico` },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: `/apple-touch-icon.png` },
        // { rel: 'icon', type: 'image/png', sizes: '192x192', href: `/android-chrome-192x192.png` },
        // { rel: 'icon', type: 'image/png', sizes: '512x512', href: `/android-chrome-512x512.png` },
      ],
      noscript: [{ children: 'JavaScript is required' }],
    },
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
  },

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__',
      }),
    ],
  },

  css: ['~/assets/css/tailwind.css'],

  // Google Fonts 配置
  googleFonts: {
    families: {
      'Noto Sans TC': [200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preload: false,
    download: true,
    inject: true,
  },

  // Nuxt Image 配置
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    APP_TITLE: process.env.APP_TITLE,
    APP_DESC: process.env.APP_DESC,
    APP_URL: process.env.APP_URL,
    APP_API: process.env.APP_API,
    public: {
      APP_TITLE: process.env.APP_TITLE,
      APP_KEYWORDS: process.env.APP_KEYWORDS,
      APP_DESC: process.env.APP_DESC,
      APP_URL: process.env.APP_URL,
      APP_API: process.env.APP_API,
      API_TOKEN: process.env.API_TOKEN,
      GA_ID: process.env.GA_ID,
    },
  },

  devtools: { enabled: process.env.NODE_ENV === 'development' },
  compatibilityDate: '2025-07-17',
})
