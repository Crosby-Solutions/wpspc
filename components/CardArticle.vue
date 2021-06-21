<template>
  <div class="border-2 border-yellow-700 m-4 p-4">
    <h2>{{ article.title }}</h2>
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
