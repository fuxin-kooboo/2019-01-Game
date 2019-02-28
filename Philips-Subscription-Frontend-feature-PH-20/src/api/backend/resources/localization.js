export default function (instance) {
  return {
    getLocalization () {
      return instance
        .get('/api/localization')
        .then(response => response.data)
    },

    saveEntry (key, value) {
      return instance
        .post('/api/localization/entry', { key, value })
        .then(response => response.data)
    }
  }
}
