<template>
  <div class="page">
    <h1>{{ event.title }}</h1>
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
