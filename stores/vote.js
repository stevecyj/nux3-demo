import { defineStore } from "pinia";

export const useVoteStore = defineStore("vote", () => {
  const voteData = ref({});
  const setVoteData = (data) => {
    voteData.value = data;
    console.log(data);
  };

  const addVote = async (type) => {
    const data = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
      method: "POST",
      body: { type },
    });
    console.log(data);
    voteData.value = data;
  };
  return { voteData, setVoteData, addVote };
});
