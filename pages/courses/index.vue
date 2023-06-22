<script setup>
const { data } = await useFetch(
  "https://vue-lessons-api.vercel.app/courses/list"
);
</script>

<template>
  <div>
    <h1>courses list</h1>
    <CardList :courses="data" />
  </div>
</template>

<style></style>
