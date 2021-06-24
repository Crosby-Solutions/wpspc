<template>
  <div class="container m-auto">
    <div class="content w-full text-left overflow-y-auto">
      <h2 class="text-2xl p-8">
        {{ uniform.title }}
      </h2>
      <div class="layout flex flex-row flex-wrap justify-around max-w-full">
        <img class="flex-auto" :src="uniform.thumbnail" height="auto" width="auto">
        <div
          class="table flex-auto m-4"
        >
          <table class="w-3/4 m-auto">
            <tr>
              <th>
                Size
              </th>
              <th>Available</th>
            </tr>
            <tr v-for="(size, i) in Object.keys(sizes)" :key="'size-row-'+i">
              <td>{{ size.split('-')[2] }}</td>
              <td>{{ sizes.size || 'None' }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const uniform = await $content('uniform', params.slug).fetch()
    return {
      uniform
    }
  },
  computed: {
    /**
    take the list of keys from the uniform content,
    filter down to those beginning with 'qty' */
    sizes () {
      return Object.keys(this.uniform)
        .filter(x => x.slice(0, 3) === 'qty')
        .reduce((obj, key) => {
          obj[key] = this.uniform[key]
          return obj
        }, {})
    }
  }
}
</script>

<style>
img {
    max-height: 500px;
    max-width: 500px;
    object-fit: cover;
}
table {
    @apply m-4 p-4 border border-red-400;
}
th,
td {
    @apply px-4 py-2 text-center w-1/2;
}
tr {
    @apply bg-yellow-100
}
tr:nth-of-type(even) {
    @apply bg-yellow-50
}

</style>
