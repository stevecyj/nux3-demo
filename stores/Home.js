import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', () => {
  const count = ref(0);
  const addCount = () => {
    count.value++;
    console.log('store', count.value);
  };
  return {
    count,
    addCount,
  };
});
