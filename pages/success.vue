<template>
  <div class="page text-left mx-auto">
    <h1>Success!</h1>
    <p>Thank-you for your contribution!</p>
    <nuxt-link to="/">
      Return to home page.
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a,
a:hover,
a:visited,
a:active {
    @apply text-yellow-600 underline;
}
</style>
