<template>
  <div class="container m-auto">
    <div class="content">
      <h2>{{ post.title }}</h2>
      <img class="float-right" :src="post.thumbnail">
      <ul>
        <li v-for="(tag,i) in post.tags" :key="'tag'+i">
          {{ tag }}
        </li>
      </ul>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let post
    try {
      post = await $content('articles', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Article not found' })
    }

    return {
      post
    }
  }
}
</script>
