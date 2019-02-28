import accounting from 'accounting'

export const getErrors = function (validation) {
  // TODO:
  const rules = {
    required: 'is required',
    numeric: 'has to be number',
    tel: 'is invalid',
    minLength: params => `must have at least ${params.minLength.min} letters`,
    maxLength: params => `not more than ${params.maxLength.max} letters`,
    oneOf: 'is invalid',
    email: 'is not an valid email address',
    postalCode: 'is should be begin with four numbers and end with two letters'
  }

  const errors = Object
    .keys(rules)
    .filter(key => validation[key] === false)
    .map(key => {
      if (typeof rules[key] === 'function') {
        return rules[key](validation.$params)
      }
      return rules[key]
    })

  return errors
}

export const formatCurrency = function (price, symbol = '€') {
  price = accounting.toFixed(price, 2)
  const formatPrice = accounting.formatMoney(price, symbol, 2, '.', ',')
  const formatPriceArray = formatPrice.split(',')
  return formatPriceArray
}
