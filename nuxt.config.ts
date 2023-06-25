// https://nuxt.com/docs/api/configuration/nuxt-config
import devConfig from "./build/nuxt.dev"
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "這是 JOJO 的好吃烹飪課程",
      meta: [
        {
          name: "description",
          content: "這是 JOJO 的好吃烹飪課程",
        },
        { property: "og:title", content: "這是 JOJO 的好吃烹飪課程" },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "這是 JOJO 的好吃烹飪課程",
        },
      ],
    },
  },
  css: ["@/assets/scss/main.scss"],
  alias:{
    'theme': devConfig.resolve.alias.theme
  },
  // ssr: false,
  // router: {
  //   options: {
  //     hashMode: true
  //   }
  // },
  // builder: "webpack",
  webpack: {
  },
  vite: {
    define: {
      // "process.env": process.env,
    },
  },
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
    ],
  },
  imports: {
    dirs: ["stores/**"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  // runtimeConfig: {
  //   token: "",
  //   public: {
  //     apiUrl: "",
  //   },
  // },
});
