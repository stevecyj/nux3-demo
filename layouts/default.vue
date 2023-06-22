<script lang="ts" setup></script>

<template>
  <div>
    <NuxtLoadingIndicator color="#f00" :height="5" :throttle="0" />
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/courses">Courses</NuxtLink>
      223
    </header>

    <slot />
    <footer>456</footer>
  </div>
</template>

<style scoped></style>
