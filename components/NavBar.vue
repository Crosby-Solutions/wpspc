<template>
  <div class="nav flex flex-col justify-between w-full bg-gray-200">
    <nuxt-link class="home" to="/">
      <title class="nav-title hidden lg:block text-xl p-4">
        Willetton Primary School Parents and Citizens Association
      </title>
      <title class="nav-title block lg:hidden text-xl p-4 pb-0">
        WPS P&C
      </title>
    </nuxt-link>
    <div class="w-full flex flex-row justify-between h-10 px-4">
      <div :class="{'scroll-active': leftScrollActive, 'scroll-hidden':true, 'scroll-left': true }">
        &lt;
      </div>
      <ul id="navScroll" class="flex-auto flex flex-row overflow-x-auto overflow-y-hidden">
        <NuxtLink
          v-for="(category, i) in categories"
          :key="'cat2'+i"
          class="options"
          :to="{
            path: '/'+category.link,
            params: { category: category.link, layout: category.layout }
          }"
        >
          <li
            class="menu-option px-4 py-2"
          >
            {{ category.title }}
          </li>
        </NuxtLink>
      </ul>
      <div :class="{'scroll-active': rightScrollActive, 'scroll-hidden':true, 'scroll-right':true }">
        &gt;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [],
      leftScrollActive: false,
      rightScrollActive: true
    }
  },
  mounted () {
    const nav = document.getElementById('navScroll')
    nav.addEventListener('scroll', e => this.checkScrollLocation(e))
    const home = {
      layout: 'page',
      title: 'Home',
      link: '',
      order: -999
    }
    const contact = {
      layout: 'page',
      title: 'Contact',
      link: 'contact',
      order: 999
    }
    this.$content('categories').sortBy('order', 'asc').fetch()
      .then((res) => {
        this.categories = [home, ...res, contact]
      })
  },
  methods: {
    checkScrollLocation (e) {
      // console.log('e: ', e)
      const buffer = 25
      this.leftScrollActive = e.target.scrollLeft > buffer
      this.rightScrollActive = e.target.scrollLeft + buffer < (e.target.scrollWidth - e.target.offsetWidth)
    }
  }
}
</script>

<style scoped>
.nav-title {
  font-size: 36px;
  color: #f6782b;
  font-weight:bold;
  font-family: 'Architects Daughter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-text-stroke: 1px black;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;

}
.options {
  border: 2px rgb(229, 231, 235) solid;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom: 0;
  box-sizing: border-box;

}
.options:hover{
  background: #f6782b;
  box-shadow: inset 0 4px 4px 4px rgba(128, 128, 128, 0.5);
}
.options.nuxt-link-exact-active{
  background: #888;
  border: 2px #f6782b solid;
  box-shadow: inset 0 4px 4px 4px rgba(128, 128, 128, 0.5);
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom: 0;

}
.nav {
  position: relative;
  border-bottom: 2px #f6782b solid;
  box-shadow: 0 2px 6px 6px rgba(128, 128, 128, 0.5);
  z-index: 10;
}
.scroll-hidden {
  @apply hidden flex-initial py-2 text-gray-200;
}
.scroll-active {
  @apply md:hidden block absolute text-yellow-700 z-10 bg-gray-200;
}
.scroll-left {
  @apply px-2 left-0;
}
.scroll-right {
  @apply px-2 right-0;
}

</style>
