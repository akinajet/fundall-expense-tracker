// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '@/plugins/api', 
    '@/plugins/repositories'
  ],
  modules: ['@nuxtjs/tailwindcss', '@ant-design-vue/nuxt', '@pinia/nuxt'],
  antd:{
    // Options
  },
  pinia:{
    autoImports: ['defineStore']
  },
  imports:{
    dirs: ["./stores"]
  },
  ssr: false,
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
})
