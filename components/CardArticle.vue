<template>
  <div class="text-sm md:text-base border-2 border-yellow-700 m-4">
    <h2 class="text-base md:text-2xl">
      {{ article.title }}
    </h2>
    <p v-if="!article.permanent">
      {{ article.date }}
    </p>
    <img :src="article.thumbnail">
    <!-- <Nuxt-content :document="article" /> -->
  </div>
</template>

<script>
export default {
  props: {
    article: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
