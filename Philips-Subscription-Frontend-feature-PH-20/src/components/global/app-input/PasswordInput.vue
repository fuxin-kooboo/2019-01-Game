<template>
  <div class="Form_group" :class="{ 'error': hasErrors }">
    <div class="Form_groupPassword">
      <label class="Form_label" v-if="label">{{ label }}</label>
      <input
        class="Form_control"
        autocomplete="off"
        :type="type"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="listeners"
      >
      <span class="password-eye" @click="toggleType">
        <app-icon name="password-eye" v-show="!isShowPassword"/>
        <app-icon name = "password-eye-pink" v-show="isShowPassword"/>
      </span>
    </div>
    <p class="tip-error" v-for="(error, index) in errors" :key="index">{{ label || placeholder }} {{ error }}</p>
  </div>
</template>

<script>
  import InputMixin from './input'
  import ValidationMixin from './validation'

  export default {
    mixins: [InputMixin, ValidationMixin],

    data () {
      return {
        isShowPassword: false
      }
    },

    computed: {
      type () {
        return this.isShowPassword ? 'text' : 'password'
      }
    },

    methods: {
      toggleType () {
        this.isShowPassword = !this.isShowPassword
      }
    }
  }
</script>

<style lang="scss">
  .password-eye {
    position: absolute;
    bottom: .1rem;
    right: .15rem;
  }

  .icon-pink {
    color: $pink;
  }
</style>
