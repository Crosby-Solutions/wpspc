<template>
  <div class="container overflow-y-auto">
    <div class="w-full text-left">
      <h1 class="text-2xl capitalize">
        {{ category }}
      </h1>
      <div v-if="articles.length">
        <ul class="flex flex-row flex-wrap w-full">
          <li v-for="(article, i) in articles" :key="'article-'+i">
            {{ layout }}
            <NuxtLink v-if="layout === 'link'" :to="'/articles/'+article.slug">
              {{ article.title }}
            </NuxtLink>
            <CardArticle v-else :article="article" />
          </li>
        </ul>
      </div>
      <ul class="flex flex-row flex-wrap w-full justify-between">
        <nuxt-link v-for="(uniform, i) in uniforms" :key="'uni' + i" :to="uniform.path">
          <li class="border-2 border-yellow-700 p-4 text-center m-4">
            <img :src="uniform.thumbnail" height="200" width="200" class="m-auto">
            <p>
              {{ uniform.title }}
            </p>
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles').where({ category: 'uniforms' }).sortBy('order', 'asc').fetch()
    const uniforms = await $content('uniform').only(['title', 'thumbnail']).fetch()
    return {
      uniforms,
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
