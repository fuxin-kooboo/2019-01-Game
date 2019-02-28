<template>
  <div class="Form_group Form_group-choice">
    <div class="AppCheckbox" :class="{ checked: $attrs.value === true}">
      <input
        type="checkbox"
        :id="id || _id"
        class="input-hide"
        v-bind="$attrs"
        v-on="listeners"
        :checked="$attrs.value"
      >
      <label :for="id || _id" class="AppCheckbox_label"></label>
    </div>
    <label class="Form_label" :for="id || _id">{{ label }}<slot></slot></label>
  </div>
</template>

<script>
  export default {
    name: 'app-checkbox',

    inheritAttrs: false,

    props: {
      label: {
        type: String,
        default: null
      },
      id: {
        type: String,
        default: null
      }
    },

    computed: {
      listeners () {
        return {
          ...this.$listeners,
          change: evt => {
            this.$emit('input', evt.target.checked)
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  $checkbox-border-color: #979797 !default;
  $checkbox-border-checked-color: $pink !default;
  $checkbox-checked-color: $pink !default;

  .Form_group-choice {
    display: flex;
    align-items: flex-start;

    .Form_label {
      font-size: .12rem;
      font-weight: 400;
      line-height: .2rem;
    }
  }

  .AppCheckbox {
    display: inline-flex;
    margin-right: .12rem;
    cursor: pointer;

    &_label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: .2rem;
      width: .2rem;
      border: .01rem solid $checkbox-border-color;

      &::after {
        content: "";
        width: .14rem;
        height: .08rem;
        border: .02rem solid $checkbox-checked-color;
        border-top: none;
        border-right: none;
        background: transparent;
        transform: rotate(-55deg);
        opacity: 0;
        margin-top: -.02rem;
      }
    }

    input[type=checkbox]:checked + .AppCheckbox_label {
      border: .01rem solid $checkbox-border-checked-color;

      &::after {
        opacity: 1;
      }
    }
  }
</style>
