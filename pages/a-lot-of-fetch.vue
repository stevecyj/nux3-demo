<script lang="ts" setup>
// const { data: orgsData } = await useFetch("https://api.github.com/orgs/nuxt");
// const { data: reposData } = await useFetch(
//   "https://api.github.com/orgs/nuxt/repos"
// );
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch(`https://api.github.com/orgs/nuxt`),
  useFetch(`https://api.github.com/orgs/nuxt/repos`),
]);
</script>

<template>
  <div>
    <h1>a lot of fetch</h1>
    {{ orgsData }}
    {{ reposData }}
  </div>
</template>

<style scoped></style>
