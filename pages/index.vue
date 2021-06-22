<template>
  <div class="overflow-y-auto overflow-x-hidden">
    <div class="container relative">
      <div class="hero-img -mt-4 h-48" />
      <div class="content flex flex-row flex-wrap justify-between">
        <div class="left">
          <h1 class="title">
            WPS P&C
          </h1>
          <div class="subtitle">
            The Willetton Primary School <br>
            Parents and Citizens Association
          </div>
          <div class="w-3/4 text-left">
            The Willetton Primary School Parents and Citizens Association, <br>
            - facilitates parent participation in our school;<br>
            - nurtures an open, engaged and friendly school community;<br>
            - provides for extra resources for our students through fundraising and facilitating events to enhance the school experience.
          </div>
          <div
            class="links mt-4"
          >
            <ul>
              <a href="https://willettonps.wa.edu.au" target="_blank" class="p-4">
                <li>
                  <img src="@/assets/wps_logo.png" height="150px" width="150px" class="m-auto">
                  Willetton Primary School Website</li>
              </a>
            </ul>
          </div>
        </div>
        <div class="right w-80 p-4">
          <FacebookFeed />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import FacebookFeed from '@/components/FBEmbed'
import Footer from '@/components/Footer'
export default {
  components: { Footer, FacebookFeed },
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
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

.container {
  margin: 0 auto;
  min-height: calc(100vh - 102px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: rgb(249, 250, 251);
  box-shadow: 0 6px 6px 6px rgba(128, 128, 128, 0.5);
}
.title {
  font-family: 'Architects Daughter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 68px;
  color: #f6782b;
  letter-spacing: 1px;
  -webkit-text-stroke: 1px black;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;

}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  @apply text-2xl md:text-4xl;
}

.links {
  display: block;
  padding-top: 15px;
}
.hero-img {
  height: 200px;
  width: 100vw;
  margin-top: -1rem;
  background-image: url("~assets/wps_parklands.jpg");
  background-size: cover;
  background-position-y: 55%;
}
</style>
