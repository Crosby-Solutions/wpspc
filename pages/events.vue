<template>
  <div class="container">
    <div class="events text-left">
      <h1 class="">
        Events
      </h1>
      {{ events }}
      <div class="">
        <h2>
          Event List:
        </h2>
        <ul>
          <nuxt-link v-for="(event, i) in events" :key="'event-'+i" :to="event.path">
            <li>
              {{ event.title }} - {{ event.when }} - {{ event.date }} - {{ getTerm(event.date) }}
            </li> -
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const events = await $content('events').sortBy('date', 'asc').fetch()
    return {
      events
    }
  },
  methods: {
    getTerm (date) {
      const year = date.slice(0, 4)
      // month is zero-indexed
      const breakPoints = [new Date(`${year}-3-16`), new Date(`${year}-6-10`), new Date(`${year}-9-4`)]
      const index = breakPoints.findIndex((d) => {
        return Date.parse(d) > Date.parse(date)
      })
      console.log('index: ', index)
      return index
    }
  }
}
</script>

<style scoped>

</style>
