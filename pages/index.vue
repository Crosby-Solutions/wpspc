<template>
  <div class="container">
    <h1 class="title">
      WPS P&C
    </h1>
    <div class="subtitle">
      The Willetton Primary School Parents and Citizens Association
    </div>
    <div class="w-1/2">
      The Willetton Primary School Parents and Citizens Association, facilitates parent participation in our school; nurtures an open, engaged and friendly school community; provides for extra resources for our students through fundraising and facilitating events to enhance the school experience.
    </div>
    <div
      class="links mt-4"
    >
      <ul>
        <a href="https://willettonps.wa.edu.au" target="_blank">
          <li>Visit: Willetton Primary School</li>
        </a>
      </ul>
      {{ categories }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const categories = await $content('categories').fetch()
    return {
      categories
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: rgb(249, 250, 251);
  box-shadow: 0 6px 6px 6px rgba(128, 128, 128, 0.5);
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  display: block;
  padding-top: 15px;
}
</style>
