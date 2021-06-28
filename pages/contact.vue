<template>
  <div class="page">
    <h1 class="text-left mr-auto">
      Contact WPS P&C
    </h1>
    <div class="flex flex-row flex-wrap-reverse justify-evenly w-full">
      <div class="contact-form flex-initial text-left">
        <h2>Contact Form</h2>
        <form
          id="contact"
          class="flex flex-col flex-initial"
          name="contact"
          action="/thanks"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <!-- @submit.prevent="handleSubmit" -->
          <input type="hidden" name="form-name" value="contact">
          <div class="input-row">
            <label for="name">Name:
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
              >
            </label>
          </div>
          <div class="input-row">
            <label for="email">Email:
              <input id="email" v-model="form.email" type="email" name="email">
            </label>
          </div>
          <div class="input-row">
            <label for="phone">Phone:
              <input id="phone" v-model="form.phone" type="tel" name="phone">
            </label>
          </div>
          <div class="input-row">
            <label for="message">Enquiry:
              <textarea id="message" v-model="form.message" :rows="5" name="message" class="p-4" />
            </label>
          </div>
          <div class="input-row flex flex-row justify-between">
            <input type="submit" class="button">
            <!-- @click.prevent="handleSubmit" -->
            <input type="reset" class="button">
          </div>
        </form>
      </div>
      <div class="contactInfo flex-initial text-left">
        <h2>Contact Information</h2>
        <table>
          <tbody>
            <tr>
              <td>Email:</td><td>willettonprimarypandc@gmail.com</td>
            </tr>
            <tr>
              <td>ABN:</td><td>57783397985</td>
            </tr>
            <tr>
              <td>Mail:</td><td>Willetton Primary School<br>Attn: P&C<br>14 Woodpecker Ave<br>Willetton, Western Australia, 6155</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
  // methods: {
  //   encode (data) {
  //     return Object.keys(data)
  //       .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  //       .join('&')
  //   },
  //   handleSubmit () {
  //     fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: this.encode({
  //         'form-name': 'contact',
  //         ...this.form
  //       })
  //     }).then(() => this.$router.push('/thanks')).catch(error => alert(error))
  //   }
  // }

}
</script>

<style scoped>
.input-row {
  @apply text-left;
  }
/* submit/reset row */
.input-row:last-of-type {
  @apply ml-auto mr-4 w-80 text-right;
}
.input-row label {
  @apply w-16 inline-block pt-2 ml-6 md:ml-0 text-left md:text-right align-top;
}
.input-row input,
.input-row textarea {
  @apply w-80 border border-gray-400 m-4 mt-0 inline-block;
}
.input-row input {
  @apply p-4 py-2 ;
}
.input-row input.button {
    @apply p-4 py-2 w-32 mx-0 cursor-pointer;
}
.input-row input.button:first-of-type {
    @apply bg-yellow-500;
}
td {
    @apply p-2 align-top;
}
</style>
