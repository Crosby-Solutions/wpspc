<template>
  <div class="container overflow-y-auto">
    <div class="w-full">
      <h1 class="text-2xl capitalize">
        {{ category }}
      </h1>
      <div v-if="articles.length">
        <ul class="flex flex-row flex-wrap w-full">
          <li v-for="(article, i) in articles" :key="'article-'+i" class="w-1/2">
            <NuxtLink :to="'/articles/'+article.slug">
              <CardArticle :article="article" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <p v-else>
        There are no {{ category }} articles.
      </p>
    </div>
  </div>
</template>

<script>
import CardArticle from '@/components/CardArticle'
export default {
  components: { CardArticle },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles').where({ category: params.categories }).fetch()
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
