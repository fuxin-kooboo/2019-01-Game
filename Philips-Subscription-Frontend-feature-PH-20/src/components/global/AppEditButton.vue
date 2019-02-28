<template>
  <a
    v-bind="$attrs"
    v-on="$listeners"
    class="AppEditButton">
    <app-icon name="edit-pen" />
    edit
  </a>
</template>

<script>
  export default {
    name: 'app-edit-button',
    inheritAttrs: false
  }
</script>

<style lang="scss">
  .AppEditButton {
    color: $blue;
    font-size: .16rem;
    line-height: .4rem;
  }
</style>
