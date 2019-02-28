export default {
  props: {
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    errorMessage: {
      type: String,
      default: null
    }
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: evt => this.$emit('input', evt.target.value),
        blur: evt => this.$emit('blur', evt.target.value)
      }
    }
  }
}
