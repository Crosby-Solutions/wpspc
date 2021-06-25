<template>
  <div class="container">
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
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact">
          <div class="input-row">
            <label for="name">Name: </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
            >
          </div>
          <div class="input-row">
            <label for="email">Email: </label>
            <input id="email" v-model="form.email" type="email">
          </div>
          <div class="input-row">
            <label for="phone">Phone: </label>
            <input id="phone" v-model="form.phone" type="tel">
          </div>
          <div class="input-row">
            <label for="message">Enquiry:</label>
            <textarea id="message" v-model="form.message" :rows="5" />
          </div>
          <div class="input-row flex flex-row justify-between">
            <input type="submit" class="button">
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
