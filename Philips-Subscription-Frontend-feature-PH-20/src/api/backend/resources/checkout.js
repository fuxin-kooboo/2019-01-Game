export default function (instance) {
  return {
    postOrderDetail ({ orderNumber, firstName, lastName, email, phoneNumber }) {
      return instance
        .post('/api/checkout/detail', {
          orderNumber,
          firstName,
          lastName,
          email,
          phoneNumber
        })
        .then(response => response.data)
    },
    postOrderAddresses ({ orderNumber, shippingAddress, hasBillingAddress, billingAddress }) {
      return instance
        .post('/api/checkout/addresses', {
          orderNumber,
          shippingAddress,
          hasBillingAddress,
          billingAddress
        })
        .then(response => response.data)
    }
  }
}
