<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RandomNumber />
  </div>
</template>

<script>
import RandomNumber from '@/components/RandomNumber.vue'

export default {
  name: 'Home',
  components: {
    RandomNumber
  }
}
</script>
