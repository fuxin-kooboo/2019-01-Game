import Vue from 'vue'
import Router from 'vue-router'
import Checkout from 'views/Checkout.vue'
import ThankYou from 'views/ThankYou.vue'
import MyAccount from 'views/MyAccount.vue'
import Overview from 'views/MyAccount/Overview.vue'
import PersonalDetails from 'views/MyAccount/PersonalDetails.vue'
import PaymentDetails from 'views/MyAccount/PaymentDetails.vue'
import Billing from 'views/MyAccount/Billing.vue'
import Support from 'views/MyAccount/Support.vue'
import Error from 'views/Error.vue'
import GameHome from 'views/GameHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Checkout
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    },
    {
      path: '/my-account',
      name: 'my-account',
      component: MyAccount,
      redirect: '/my-account/overview',
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: Overview
        },
        {
          path: 'personal-details',
          name: 'personal-details',
          component: PersonalDetails
        },
        {
          path: 'payment-details',
          name: 'payment-details',
          component: PaymentDetails
        },
        {
          path: 'billing',
          name: 'billing',
          component: Billing
        },
        {
          path: 'support',
          name: 'support',
          component: Support
        }
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/game-home',
      name: 'game-home',
      component: GameHome
    }
  ]
})
