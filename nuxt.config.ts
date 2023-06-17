// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@pinia/nuxt"],
});
