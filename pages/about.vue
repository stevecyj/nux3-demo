<script lang="ts" setup>
definePageMeta({
  layout: "default",
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
