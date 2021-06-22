<template>
  <div class="container m-auto">
    <div class="content w-full text-left overflow-y-auto">
      <h2>{{ uniform.title }}</h2>
      <img class="float-right" :src="uniform.thumbnail" height="400px" width="400px">
      {{ uniform }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let uniform
    try {
      uniform = await $content('uniform', params.slug).fetch()
    } catch (e) {
      error({ message: 'Uniform not found' })
    }

    return {
      uniform
    }
  }
}
</script>

<style>

</style>
