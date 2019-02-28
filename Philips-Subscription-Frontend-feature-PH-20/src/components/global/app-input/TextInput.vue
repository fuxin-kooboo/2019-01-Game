<template>
  <div class="Form_group" :class="{ 'error': hasErrors }">
    <label class="Form-label" v-if="label">{{ label }}</label>
    <input
      class="Form_control"
      autocomplete="off"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-on="listeners"
    >
    <p class="tip-error" v-for="(error, index) in errors" :key="index">{{ label || placeholder }} {{ error }}</p>
  </div>
</template>

<script>
  import InputMixin from './input'
  import ValidationMixin from './validation'

  export default {
    mixins: [InputMixin, ValidationMixin]
  }
</script>
