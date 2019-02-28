<template>
  <svg class="icon" :class="iconClass">
    <use :xlink:href="href + `#icon-${this.name}`" />
  </svg>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        href: require('assets/icons/icons.svg')
      }
    },
    computed: {
      iconClass () {
        return `icon-${this.name}`
      }
    }
  }
</script>

<style lang="scss">
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: .24rem;
    height: .24rem;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
</style>
