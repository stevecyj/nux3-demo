<script setup>
const { count, addCount } = useAddCount();
</script>

<template>
  <div>
    <h1>index:{{ count }}</h1>
    <button @click="addCount">add</button>
    <Home />
    <Box />
  </div>
</template>

<style></style>
