<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="AppButton">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'app-button',
    inheritAttrs: false
  }
</script>

<style lang="scss">
  .AppButton {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $pink-deeper;
    border-radius: .02rem;
    padding: .08rem .15rem;
    color: $white;
    font-size: .17rem;
    font-weight: 500;
    width: 100%;

    @include media(tablet) {
      width: auto;
      max-width: 100%;
    }
  }

  .theme-official {
    .AppButton {
      background: #0066a1;
    }
  }
</style>
