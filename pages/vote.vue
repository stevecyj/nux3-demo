<script lang="ts" setup>
const { voteData, setVoteData } = useVoteStore();
await useAsyncData("vote", async () => {
  const data = await $fetch("https://vue-lessons-api.vercel.app/vote/list");
  console.log(data);
  setVoteData(data);
  return data;
});
</script>

<template>
  <div class="vote_app">
    <div class="box_list">
      <VoteCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vote_app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }
}
.box_list {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
