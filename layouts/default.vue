<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);

nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>

<template>
  <div>
    <!-- <NuxtLoadingIndicator color="#f00" :height="5" :throttle="0" /> -->
    <div v-show="isLoading">Loading</div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/courses">Courses</NuxtLink>
      223
    </header>

    <slot />
    <footer>456</footer>
  </div>
</template>

<style scoped></style>
