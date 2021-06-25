<template>
  <div class="container overflow-y-auto">
    <div class="w-full text-left">
      <h1 class="text-2xl capitalize">
        {{ category }}
      </h1>
      <div v-if="articles.length">
        <ul class="flex flex-column flex-wrap w-full max-h-4/5">
          <li v-for="(article, i) in articles" :key="'article-'+i" class="w-full md:w-1/2">
            {{ layout }}
            <NuxtLink v-if="layout === 'link'" :to="'/articles/'+article.slug">
              {{ article.title }}
            </NuxtLink>
            <CardArticle v-else :article="article" />
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
    const articles = await $content('articles').where({ category: params.categories }).sortBy('order', 'asc').fetch()
    return {
      articles
    }
  },
  data () {
    return {
      category: this.$route.params.categories,
      layout: this.$route.params.layout
    }
  }
}
</script>

<style>
.nuxt-content h1 {
  @apply text-3xl;
}

.nuxt-content h2 {
  @apply text-2xl;
}
.nuxt-content li {
  list-style: before;
  list-style-type: circle;
  margin-left: 2rem;
}

.nuxt-content a,
.nuxt-content a:visited {
  @apply text-yellow-700 underline;

}
</style>
