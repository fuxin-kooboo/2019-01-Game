export default function (instance) {
  return {
    getPaymentMethods () {
      return instance
        .get('/api/payment/methods')
        .then(response => response.data)
    }
  }
}
