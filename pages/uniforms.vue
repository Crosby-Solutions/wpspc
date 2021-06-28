<template>
  <div class="page overflow-y-auto">
    <div class="w-full text-left">
      <h1 class="text-2xl capitalize">
        Uniforms
      </h1>
      <div v-if="articles.length">
        <ul class="flex flex-row flex-wrap w-full">
          <li v-for="(article, i) in articles" :key="'article-'+i">
            <CardArticle :article="article" />
          </li>
        </ul>
      </div>
      <ul v-if="uniforms.length" class="flex flex-row flex-wrap w-full justify-around md:justify-between">
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
    console.log('articles: ', articles)
    const uniforms = await $content('uniform').only(['title', 'thumbnail']).fetch()
    console.log('uniforms: ', uniforms)
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
h1 {
  @apply text-3xl;
}

h2 {
  @apply text-2xl;
}
/* li {
  list-style: before;
  list-style-type: circle;
  margin-left: 2rem;
} */

.nuxt-content a,
.nuxt-content a:visited {
  @apply text-yellow-700 underline;

}

</style>
