<template>
  <div class="container">
    <div class="events">
      {{ event }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const event = await $content('events', params.slug).fetch()
    return {
      event
    }
  }

}
</script>

<style>

</style>
