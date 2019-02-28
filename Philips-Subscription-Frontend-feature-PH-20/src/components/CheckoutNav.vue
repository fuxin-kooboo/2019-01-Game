<template>
  <div class="Steps">
    Step
    <span class="Step_number">{{ stepNumer }}</span>
    of
    <span class="Step_count"> {{ stepCount }}</span>
  </div>
</template>

<script>
  export default {
    name: 'checkout-nav',
    props: {
      stepNumer: {
        type: Number,
        required: true
      }
    },

    data () {
      return {
        stepCount: 3
      }
    }
  }
</script>

<style lang="scss">
  .Steps {
    font-size: .12rem;
  }
</style>
