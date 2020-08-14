<template>
  <div class="home">
      <home-comp></home-comp>
  </div>
</template>

<script>
// @ is an alias to /src
import home_comp from '@/components/home_comp.vue'

export default {
  components: {
    "home-comp": home_comp
  }
}
</script>
