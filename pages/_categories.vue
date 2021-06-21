<template>
  <div class="container">
    <div class="w-full">
      <h1 class="text-2xl capitalize">
        {{ category }}
      </h1>
      <div v-if="articles.length">
        <ul>
          <li v-for="(article, i) in articles" :key="'article-'+i">
            {{ article }}
          </li>
        </ul>
        {{ articles }}
      </div>
      <p v-else>
        There are no {{ category }} articles.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles').where({ tags: params.categories }).fetch()
    return {
      articles
    }
  },
  data () {
    return {
      category: this.$route.params.categories
    }
  }
}
</script>

<style>

</style>
