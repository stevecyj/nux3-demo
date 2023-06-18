<script lang="ts" setup>
const { data } = await useAsyncData("nuxt3test", () => {
  return $fetch("https://api.nuxtjs.dev/mountains");
});
</script>

<template>
  <div>
    <h1>useAsyncData</h1>
    {{ data }}}
  </div>
</template>

<style scoped></style>
