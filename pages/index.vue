<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>
  </main>
</template>

<script>
export default {};
</script>
