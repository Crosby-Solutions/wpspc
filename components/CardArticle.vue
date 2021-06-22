<template>
  <div class="text-sm md:text-base border-2 border-yellow-700 m-4 text-left">
    <h2 class="text-lg md:text-2xl p-4">
      {{ article.title }}
    </h2>
    <p v-if="!article.permanent">
      {{ article.date }}
    </p>
    <img :src="article.thumbnail">
    <Nuxt-content :document="article" class="p-4" />
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
