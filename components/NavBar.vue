<template>
  <div class="nav flex flex-row justify-between w-full p-4">
    <div class="text-lg">
      Willetton Primary School Parents and Citizens Association
    </div>
    <ul>
      <li v-for="(category, i) in categories" :key="'cat2'+i">
        <NuxtLink :to="'articles/'+category.slug">
          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: []
    }
  },
  // TODO: get menu content from netlify CMS
  mounted () {
    this.$content('categories').fetch()
      .then((res) => {
        this.categories = res
      })
  }
}
</script>

<style>
.nav {

  background: #f6782b;
}

</style>
