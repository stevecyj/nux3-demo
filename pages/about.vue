<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

// useHead({
//   title: "關於我們 About - Nuxt3 高效入門全攻略",
//   meta: [
//     { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//     {
//       property: "og:description",
//       content: "關於我們 About - 最棒的Nuxt3的線上課程",
//     },
//   ],
// });

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
      tagPosition: "bodyClose",
    },
  ],
});

useSeoMeta({
  title: "About - Nuxt3 高效入門全攻略",
  description: "關於我們 - 最棒的Nuxt3的線上課程",
  ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
  ogTitle: "About - Nuxt3 高效入門全攻略",
  twitterCard: "summary_large_image",
});

import AboutHeader from "@/components/About/Header.vue";
import AboutFooter from "@/components/About/Footer.vue";
function enableCustomLayout() {
  setPageLayout("custom");
}
</script>

<template>
  <AboutHeader />
  <div>Page: about</div>
  <NuxtLink to="/about">about index</NuxtLink> |
  <NuxtLink to="/about/a">about a</NuxtLink> |
  <NuxtLink to="/about/b">about b</NuxtLink> |
  <button @click="enableCustomLayout">Update layout</button>
  <main>
    <NuxtPage />
  </main>
  <AboutFooter />
</template>

<style scoped>
a {
  padding: 0 20px;
}
</style>
