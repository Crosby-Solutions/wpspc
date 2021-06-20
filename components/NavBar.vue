<template>
  <div class="nav flex flex-row justify-between w-full p-4 shadow">
    <div class="text-lg">
      Willetton Primary School Parents and Citizens Association
    </div>
    <div>{{ categories }}</div>
    <ul>
      <li v-for="(cat, i) in categories" :key="'cat'+i">
        {{ cat }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
// TODO: get menu content from netlify CMS
  async asyncData ({ $content }) {
    const categories = await $content('categories').fetch()
    return {
      categories
    }
  }
}
</script>

<style>
.nav {

  background: #f6782b;
}

</style>
