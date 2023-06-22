<script setup>
const route = useRoute();
console.log("route", route.params.courses);
const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`
);
</script>

<template>
  <div>
    <h1>courses: {{ data }}</h1>
  </div>
</template>

<style></style>
