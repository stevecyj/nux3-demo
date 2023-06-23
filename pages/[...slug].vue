<script setup>
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <div>
    <h1>404 not found</h1>
    <p>{{ route.params.slug }}</p>
  </div>
</template>

<style></style>
