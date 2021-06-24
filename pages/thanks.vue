<template>
  <div class="container text-left mx-auto">
    <h1>Thanks!</h1>
    <p>Thank-you for your submission. Someone from the P&C will be in contact shortly.</p>
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
