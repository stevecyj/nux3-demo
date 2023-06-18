<script lang="ts" setup>
const { data } = await useAsyncData("nuxt3test", () => {
  return $fetch("https://api.nuxtjs.dev/mountains");
});

// 重新觸發更新資料
const refreshGetData = () => {
  refreshNuxtData("nuxt3test");
  console.log("refreshGetData");
};
</script>

<template>
  <div>
    <h1>useAsyncData</h1>
    <button @click="refreshGetData">refresh</button>
    {{ data }}
  </div>
</template>

<style scoped></style>
