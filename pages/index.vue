<script setup>
// const { count, addCount } = useAddCount();
// const { data } = await useFetch("https://api.nuxtjs.dev/mountains");
const { data } = await useFetch("https://api.nuxtjs.dev/mountains", {
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer 1234567890`;
    console.log(options.headers);
  },
  onResponse({ request, response, options }) {
    // 處理回傳資料
    return response._data;
  },
});

const { $hello } = useNuxtApp();
const store = useHomeStore();
const selectedDate = ref(new Date());
const fetchData = async () => {
  const res = await fetch("/api/hello").then((res) => res.json());
  console.log(res);
};
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log("route=>", route);
  console.log("router=>", router);
});

console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("process.env=> ", process.env.alias.);

// console.log("ENV=>", process.env.ENV);
// console.log("WEB_URL=>", process.env.WEB_URL);

// runtime config
const config = useRuntimeConfig();
console.log("config: ", config);
console.log("config: ", config.public);
const { data: dataBanner, refresh: refreshBanner } = useFetch(
  `${config.public.apiUrl}/api/banner`,
  {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  }
);

if (process.server) {
  console.log("server token:", config.token);
  console.log("server config: ", config.alias);
}
</script>

<template>
  <div>
    <h1>index:{{ store.count }}</h1>
    {{ data }}
    <br />
    <button @click="fetchData">get api data</button>
    <button @click="refreshBanner">refresh banner</button>
    <br />
    {{ dataBanner }}
    <ClientOnly>
      <h2>{{ $hello("IronMan") }}</h2>
    </ClientOnly>
    <NuxtLink to="/vote">vote</NuxtLink> |
    <NuxtLink to="/courses">courses list</NuxtLink> |
    <NuxtLink to="/user">user</NuxtLink> |
    <NuxtLink to="/about">about</NuxtLink> |
    <NuxtLink to="/async-data">async-data</NuxtLink> |
    <NuxtLink to="/a-lot-of-fetch">a-lot-of-fetch</NuxtLink> |
    <h2 v-timeformat="1686925898493"></h2>
    <VDatePicker v-model="selectedDate" />
    <button class="box" @click="store.addCount">add</button>
    <Home />
    <Box />
    <BoxBtn />
  </div>
</template>

<style></style>
