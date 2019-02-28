export default function (instance) {
  return {
    getProduct () {
      return instance
        .get('/api/product')
        .then(response => response.data)
    }
  }
}
