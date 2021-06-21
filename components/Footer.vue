<template>
  <div class="w-full relative text-white bg-black flex flex-row justify-evenly p-4">
    <p class="text-sm">
      Willetton Primary School P&C<br>
      ABN: 57783397985<br>
      14 Woodpecker Ave<br>
      Willetton, Western Australia, 6155<br>
      Australia
    </p>
    <p class="text-sm">
      <a href="https://www.facebook.com/WillettonPrimarySchoolPandC">Facebook</a><br>
      <a href="mailto:willettonprimarypandc@gmail.com">Email</a>
    </p>
    <CrosbySolutions class="absolute bottom-1 right-1" />
  </div>
</template>

<script>
import CrosbySolutions from '@/components/CrosbySolutions'
export default {
  components: {
    CrosbySolutions
  }
}
</script>

<style>

</style>
