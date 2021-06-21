<template>
  <div class="nav flex flex-col justify-between w-full">
    <div class="text-lg p-4">
      Willetton Primary School Parents and Citizens Association
    </div>
    <ul class="flex flex-row">
      <li
        v-for="(category, i) in categories"
        :key="'cat2'+i"
        class="px-4 py-2"
      >
        <NuxtLink :to="category.slug">
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
