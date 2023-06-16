<script setup>
// const { count, addCount } = useAddCount();
const store = useHomeStore();
</script>

<template>
  <div>
    <h1>index:{{ store.count }}</h1>
    <button @click="store.addCount">add</button>
    <Home />
    <Box />
  </div>
</template>

<style></style>
