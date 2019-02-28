export default function (instance) {
  return {
    getProductSubscription () {
      return instance
        .get('/api/productSubscription')
        .then(response => response.data)
    }
  }
}
