import { defineStore } from "pinia";

export const useVoteStore = defineStore("vote", () => {
  const voteData = ref({});
  const isFetch = ref(false);
  const setVoteData = (data) => {
    voteData.value = data;
    console.log(data);
  };

  const addVote = async (type) => {
    if (isFetch.value) return;

    isFetch.value = true;
    try {
      const data = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
        method: "POST",
        body: { type },
      });
      console.log(data);
      voteData.value = data;
      alert("投票成功");
    } catch (error) {
      alert(error.message);
    } finally {
      isFetch.value = false;
    }
  };
  return { isFetch, voteData, setVoteData, addVote };
});
