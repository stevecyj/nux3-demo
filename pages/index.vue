<script setup>
// const { count, addCount } = useAddCount();
const { $hello } = useNuxtApp();
const store = useHomeStore();
const selectedDate = ref(new Date());
</script>

<template>
  <div>
    <h1>index:{{ store.count }}</h1>
    <h2>{{ $hello('IronMan') }}</h2>
    <h2 v-timeformat="1686925898493"></h2>
    <VDatePicker v-model="selectedDate" />
    <button @click="store.addCount">add</button>
    <Home />
    <Box />
    <BoxBtn />
  </div>
</template>

<style></style>
