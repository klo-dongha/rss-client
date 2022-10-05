<template>
  <div class="container">
    <h1 v-if="error.statusCode === 400">400</h1>
    <h1 v-if="error.statusCode === 404">404</h1>
    <h1 v-if="error.statusCode === 422">422</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
