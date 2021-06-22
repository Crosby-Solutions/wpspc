<template>
  <div class="container overflow-y-auto">
    <div class="w-full text-left">
      <h1 class="text-2xl capitalize">
        {{ category }}
      </h1>
      <ul class="flex flex-row flex-wrap w-full justify-evenly">
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
    const uniformsAll = await $content('uniform').only(['title', 'thumbnail']).fetch()
    const uniforms = []
    const map = new Map()
    // uniqify the list
    for (const item of uniformsAll) {
      if (!map.has(item.title)) {
        map.set(item.title, true) // set any value to Map
        uniforms.push(item)
      }
    }
    return {
      uniforms
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
