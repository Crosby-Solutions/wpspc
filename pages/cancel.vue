<template>
  <div class="page text-left mx-auto">
    <h1>Cancelled</h1>
    <p>Your transaction has been cancelled.</p>
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
