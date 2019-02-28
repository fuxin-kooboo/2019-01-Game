export default {
  props: {
    errors: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    hasErrors () {
      return this.errors && this.errors.length > 0
    }
  }
}
