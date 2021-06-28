<template>
  <div class="page">
    <div class="events text-left w-full">
      <h1 class="text-2xl">
        Events
      </h1>
      <div class="flex flex-row flex-wrap w-full">
        <div v-for="term in termsWithEvents" :key="'term-'+term" class="terms w-full md:w-1/4">
          <h2>
            Term {{ term }}
          </h2>
          <ul>
            <Nuxt-Link v-for="(event, i) in events.filter(e => e.term === term)" :key="'event-'+i" :to="event.path">
              <li>
                <h3>
                  {{ event.title }}
                </h3>
                <p class="italic">
                  <span v-if="event.showWhen">{{ event.when }}</span><span v-if="event.showWhen && event.showDate"> - </span><span v-if="event.showDate">{{ event.date.split('T')[0].split('-').reverse().join('-') }}</span>
                </p>
                <Nuxt-Content :document="event" />
                <br>
              </li>
            </Nuxt-Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const eventsContent = await $content('events').sortBy('date', 'asc').fetch()
    return {
      eventsContent
    }
  },
  computed: {
    events () {
      const output = []
      this.eventsContent.forEach((e) => {
        e.term = this.getTerm(e.date)
        output.push(e)
      })
      return output
    },
    termsWithEvents () {
      const output = []
      this.events.forEach((e) => {
        if (!output.includes(e.term)) {
          output.push(e.term)
        }
      })
      return output.sort()
    }
  },
  methods: {
    getTerm (date) {
      if (!date) { return date }
      if (date.length < 4) { return undefined }
      const year = date.slice(0, 4)
      const breakPoints = [new Date(`${year}-4-16`), new Date(`${year}-7-10`), new Date(`${year}-10-4`)]
      const index = breakPoints.findIndex((d) => {
        return Date.parse(d) > Date.parse(date)
      })
      if (index === -1) { return 4 } // not found will mean term 4
      return index + 1
    }
  }
}
</script>
