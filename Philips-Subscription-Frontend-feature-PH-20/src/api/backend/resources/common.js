export default function (instance) {
  return {
    getCommonData () {
      return instance
        .get('/api/common')
        .then(response => response.data)
    },
    getLinks () {
      return instance
        .get('/api/common/links')
        .then(response => response.data)
    }
  }
}
