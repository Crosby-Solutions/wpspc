<template>
  <div class="container m-auto">
    <div class="content w-full text-left overflow-y-auto">
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
    } catch (e) {
      error({ message: 'Article not found' })
    }

    return {
      post
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
