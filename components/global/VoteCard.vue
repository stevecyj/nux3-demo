<script setup>
const voteStore = useVoteStore();
</script>
<template>
  <div class="card" v-for="vote in voteStore.voteData" :key="vote.name">
    <div class="card_info">
      <img :src="vote.path" :alt="vote.name" />
      <h1>{{ vote.name }}</h1>
    </div>
    <VoteBtn @click="voteStore.addVote(vote.name)">
      {{ voteStore.isFetch ? "投票中" : vote.count }}
    </VoteBtn>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 170px;
  height: 220px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
  }
}
</style>
