// https://nuxt.com/docs/api/configuration/nuxt-config
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
  css:["@/assets/scss/main.scss"],
  // ssr: false,
  builder: "webpack",
  webpack: {},
  devtools: { enabled: false },
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
  modules: ["@pinia/nuxt"],
});
