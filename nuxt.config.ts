import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    dataValue: 'theme',
  },
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.'
      }
    }
  },
  shadcn: {
    componentDir: './app/components/shadcn',
    prefix: 'Ui'
  }
})
