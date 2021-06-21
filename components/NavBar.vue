<template>
  <div class="nav flex flex-col justify-between w-full bg-gray-200">
    <nuxt-link to="/">
      <title class="hidden md:block text-lg p-4">
        Willetton Primary School Parents and Citizens Association
      </title>
      <title class="block md:hidden text-lg p-4">
        WPS P&C
      </title>
    </nuxt-link>
    <ul class="flex flex-row">
      <li
        v-for="(category, i) in categories"
        :key="'cat2'+i"
        class="menu-option px-4 py-2"
      >
        <NuxtLink :to="'/'+category.link">
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
  mounted () {
    this.$content('categories').fetch()
      .then((res) => {
        this.categories = res
      })
  }
}
</script>

<style>
.menu-option:hover{
  background: #f6782b;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  box-shadow: inset 0 4px 4px 4px rgba(128, 128, 128, 0.5);
}
.nav {
  border-bottom: 2px #f6782b solid;
  box-shadow: 0 2px 6px 6px rgba(128, 128, 128, 0.5);
  z-index: 10;
  /* background: #f6782b;
   */
}

</style>
