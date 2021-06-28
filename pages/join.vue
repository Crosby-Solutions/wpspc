<template>
  <div class="page">
    <div class="text-left">
      <h1 class="text-3xl">
        Join the P&C
      </h1>
      <p>
        P&C membership is not about being on a committee, but about keeping you connected to what is
        happening and gives you a voice. It also allows you to vote on decisions at P&C meetings. If you can’t make
        it to meetings, we’ll keep you in touch via emails of meeting agendas and the meeting minutes (what
        happened at the meetings). But if you do make it to the meeting your family’s faction gets a faction point!
      </p>
      <p class="required">
        indicates required inputs.
      </p>
      <form
        id="join"
        class="flex flex-col flex-initial text-center mx-auto w-max-96"
        name="join"
        action="/thanks"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <!-- @submit.prevent="handleSubmit" -->
        <input type="hidden" name="form-name" value="join">
        <div class="input-row">
          <label for="name" class="required">Name: </label>
          <input id="name" v-model="form.name" name="name" type="text" required>
        </div>
        <div class="input-row">
          <label for="address" class="required">Address: </label>
          <input id="address" v-model="form.address" name="address" type="text" required>
        </div>
        <div class="input-row">
          <label for="phone" class="required">Phone: </label>
          <input id="phone" v-model="form.phone" name="phone" type="tel" required>
        </div>
        <div class="input-row">
          <label for="mobile" class="required">Mobile: </label>
          <input id="mobile" v-model="form.mobile" name="mobile" type="tel" required>
        </div>
        <div class="input-row">
          <label for="email" class="required">Email: </label>
          <input id="email" v-model="form.email" name="email" type="email" required>
        </div>
        <div class="input-row">
          <label for="faction" class="required">Faction: </label>
          <select id="faction" v-model="form.faction" name="faction" required class="capitalize">
            <option v-for="faction in factionList" :key="faction" :value="faction" class="capitalize">
              {{ faction }}
            </option>
          </select>
        </div>
        <p class="full-row">
          My child/ren is/are in Year(s):
        </p>
        <div class="full-row">
          <div v-for="(year, i) in yearList" :key="year" class="year-checkboxes w-1/4 text-left">
            <input
              :id="'years-'+year"
              v-model="form.years[i]"
              class="year-check"
              type="checkbox"
              :name="'years-'+year"
            >
            <label :for="'years-'+year" class="year-label text-sm capitalize">
              {{ year }}</label>
          </div>
        </div>
        <p class="full-row">
          We’re sure you have a talent, an idea, a passion, or even a little time that could help us and the school grow
          into an even better place for our kids. We’d love it if you could let us know which of the following you could help
          us out with in the coming year sometime:
        </p>
        <div class="full-row">
          <div v-for="(help, i) in helpList" :key="help" :value="help" class="help-checkboxes w-full ml-12 md:w-1/2 md:ml-0 text-left">
            <input
              :id="'help-'+help"
              v-model="form.help[i]"
              class="help-check mr-4"
              type="checkbox"
              :name="'help-'+help"
            >
            <label :for="'help-'+help" class="help-label text-sm capitalize">
              {{ help }}</label>
          </div>
        </div>
        <div class="input-row">
          <label for="helpOther">Other: </label>
          <input id="helpOther" v-model="form.helpOther" name="helpOther" type="text" required>
        </div>
        <hr width="40%" class="my-2 mx-auto">
        <div class="tick-row">
          <input
            id="understandMembershipLength"
            v-model="form.understandMembershipLength"
            type="checkbox"
            name="understandMembershipLength"
            required
          >
          <label for="understandMembershipLength" class="required">I understand that my membership is current until the next AGM and that by joining the P&C I
            agree to abide by the Rules of the Association (available from the P&C website).</label>
        </div>
        <div class="tick-row">
          <input
            id="understandEmail"
            v-model="form.understandEmail"
            type="checkbox"
            name="understandEmail"
            required
          >
          <label for="understandEmail" class="required">I understand that notice of meetings and minutes will be sent to my email address.</label>
        </div>
        <div class="input-row">
          <input type="submit" class="button">
          <!-- @click.prevent="handleSubmit" -->
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
      yearList: ['kindy', 'pre-primary', 'year 1', 'year 2', 'year 3', 'year 4', 'year 5', 'year 6'],
      helpList: [
        'Bake a cake',
        'Be a class rep',
        'Book keeping/Accounting',
        'Donate products/services',
        'Event Planning',
        'Gardening/Busy Bee',
        'Help at a school disco',
        'Help arrange food at a morning tea',
        'Help with a social event',
        'Help out with special lunch orders',
        'Help with School Banking',
        'Join an event organisation team',
        'Staff a cake stall at an event',
        'Turn sausages at a sausage sizzle',
        'Web / Graphic Design',
        'Other, please specify...'
      ],
      form: {
        name: '',
        address: '',
        phone: '',
        mobile: '',
        email: '',
        data: '',
        faction: '',
        help: [],
        helpOther: '',
        years: [],
        understandMembershipLength: false,
        understandEmailUse: false,
        talents: []
      }
    }
  }
}
</script>

<style scoped>
p {
    @apply p-4;
}
.input-row {
    @apply text-center w-full md:w-2/5 md:mx-auto flex flex-row justify-between;
}
.tick-row {
    @apply text-center w-full md:w-2/5 md:mx-auto flex flex-row justify-between;
}
.full-row {
    @apply text-left w-full md:w-2/5 md:mx-auto flex flex-row flex-wrap justify-between;
}
.full-col {
    @apply text-left w-full md:w-2/5 md:mx-auto flex flex-col flex-wrap justify-between;
}
.year-checkboxes,
.full-row label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.year-check {
  @apply ml-1;
}
.help-checkboxes {
  @apply block mr-4;
}
/* submit/reset row */
.input-row:last-of-type {
  @apply ml-auto mr-4 text-right;
}
.input-row input.button {
  @apply p-4 py-2 w-32 mx-0 cursor-pointer;
}
.input-row input.button:first-of-type {
  @apply bg-yellow-500;
}

/* left side labels and checkboxes */
.tick-row input,
.input-row label {
  @apply w-20 inline-block my-6 text-right align-top flex-none;
}
/* right side inputs and descriptions */
.input-row input,
.input-row textarea,
.input-row select {
  @apply w-auto border border-gray-400 my-4 inline-block;
}
/* set to same size as the default input boxes */
.input-row input,
.input-row select {
    /* width: 252px; */
  @apply flex-auto ml-4;
}
.input-row input,
.input-row select {
  @apply p-4 py-2 ;
}
.tick-row label {
  @apply inline-block text-left pb-4;
}
.required::before {
  content: "* ";
  color: red;
}

</style>
