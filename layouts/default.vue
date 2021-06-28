<template>
  <div class="fullscreen container mx-auto flex flex-col relative">
    <Facebook />
    <Navbar class="flex-initial" />
    <Nuxt class="flex-auto" />
  </div>
</template>
<script>
import Navbar from '@/components/NavBar'
import Facebook from '@/components/FBRootEmbed'
export default {
  components: { Navbar, Facebook },

  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  mounted () {
    // NetlifyCMS
    // https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #f6782b, black);
}
.fullscreen {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}
.page {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  background: rgb(249, 250, 251);
  box-shadow: 0 6px 6px 6px rgba(128, 128, 128, 0.5);
  box-sizing: border-box;
}
h1 {
  @apply text-3xl;
}
h2 {
    color: #f6782b;
  @apply text-2xl;
}
h3 {
  @apply text-xl;
}

</style>
