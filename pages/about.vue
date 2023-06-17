<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "關於我們 About - Nuxt3 高效入門全攻略",
  meta: [
    { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
    { property: "og:url", content: "http://localhost:3000/about" },
    { property: "og:image", content: "http://localhost:3000/share.jpg" },
    { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
    {
      property: "og:description",
      content: "關於我們 About - 最棒的Nuxt3的線上課程",
    },
  ],
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
  <button @click="enableCustomLayout">Update layout</button>
  <AboutFooter />
</template>

<style scoped></style>
