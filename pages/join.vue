<template>
  <div class="container">
    <div class="text-left overflow-y-auto">
      <h1 class="text-3xl">
        Join the P&C
      </h1>
      <p>
        P&C membership is not about being on a committee, but about keeping you connected to what is
        happening and gives you a voice. It also allows you to vote on decisions at P&C meetings. If you can’t make
        it to meetings, we’ll keep you in touch via emails of meeting agendas and the meeting minutes (what
        happened at the meetings). But if you do make it to the meeting your family’s faction gets a faction point!
      </p>
      <form
        id="join"
        class="flex flex-col flex-initial text-center mx-auto w-max-96"
        name="join"
        action="/thanks"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="join">
        <div class="input-row">
          <label for="name">Name: </label>
          <input id="name" v-model="form.name" type="text" required>
        </div>
        <div class="input-row">
          <label for="email">Address: </label>
          <input id="email" v-model="form.address" type="text" required>
        </div>
        <div class="input-row">
          <label for="phone">Phone: </label>
          <input id="phone" v-model="form.phone" type="tel" required>
        </div>
        <div class="input-row">
          <label for="phone">Mobile: </label>
          <input id="phone" v-model="form.mobile" type="tel" required>
        </div>
        <div class="input-row">
          <label for="email">Email: </label>
          <input id="email" v-model="form.email" type="email" required>
        </div>
        <div class="input-row">
          <label for="email">Faction: </label>
          <select id="email" v-model="form.faction" required>
            <option v-for="faction in factionList" :key="faction" :value="faction" class="capitalize">
              {{ faction }}
            </option>
          </select>
        </div>
        <p class="text-left">
          My child/ren is/are in Year(s):
        </p>
        <div class="mx-auto flex flex-row flex-wrap justify-between">
          <div v-for="year in yearList" :key="year" class="year-checkboxes w-1/4 text-left">
            <input
              :id="'years-'+year"
              class="year-check"
              type="checkbox"
              :value="form.years"
              :name="'years-'+year"
            >
            <label :for="year" class="year-label text-sm capitalize">{{ year }}</label>
          </div>
        </div>
        <hr class="my-2">
        <div class="tick-row">
          <input
            id="understandMembershipLength"
            type="checkbox"
            name="understandMembershipLength"
            required
          >
          <label for="understandMembershipLength">I understand that my membership is current until the next AGM and that by joining the P&C I
            agree to abide by the Rules of the Association (available from the P&C website).</label>
        </div>
        <div class="tick-row">
          <input
            id="understandMembershipLength"
            type="checkbox"
            name="understandMembershipLength"
            required
          >
          <label for="understandMembershipLength">I understand that notice of meetings and minutes will be sent to my email address.</label>
        </div>
        <div class="input-row flex flex-row justify-between">
          <input type="submit" class="button">
          <input type="reset" class="button">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      factionList: ['blue', 'green', 'gold', 'red', 'unsure'],
      yearList: ['kindy', 'pre-prim.', 'year 1', 'year 2', 'year 3', 'year 4', 'year 5', 'year 6'],
      form: {
        name: '',
        address: '',
        phone: '',
        mobile: '',
        email: '',
        data: '',
        faction: '',
        years: [],
        understandMembershipLength: false,
        understandEmailUse: false,
        talents: []
      }
    }
  }

}
</script>

<style>
.input-row {
    @apply text-center w-full;
  }
.tick-row {
    @apply text-center w-full;
  }
/* submit/reset row */
.input-row:last-of-type {
  @apply ml-auto mr-4 text-right;
}
.tick-row input,
.input-row label {
  @apply w-16 inline-block my-6 text-right align-top;
}
.input-row input,
.input-row textarea,
.input-row select {
  @apply border border-gray-400 my-4 inline-block w-64;
}
.input-row input,
.input-row select {
  @apply p-4 py-2 ;
}
.tick-row label {
    @apply w-64 inline-block text-left pb-4;
}
/* .tick-row input {
  @apply w-12 my-4 align-top;
} */
.input-row input.button {
    @apply p-4 py-2 w-32 mx-0 cursor-pointer;
}
.input-row input.button:first-of-type {
    @apply bg-yellow-500;
}

</style>
