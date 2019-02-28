import { helpers } from 'vuelidate/lib/validators'

export const postalCode = helpers.regex('postalCode', /^\d{4}\s?[A-Za-z]{2}$/)

export const tel = helpers.regex('tel', /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/)
