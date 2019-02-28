<template>
  <section class="PaymentMethod">
    <div class="PaymentMethod_header">
      <div class="flex-between align-items-end Form_titleBar">
        <h2 class="title">Personal method</h2>
        <checkout-nav :stepNumer="3"/>
      </div>
    </div>
    <div class="PaymentMethod_body">
      <div class="PaymentMethod_Wrapper">
        <div class="PaymentMethod_Select">
          <h3 class="title-sub">Select a payment method</h3>
          <div class="PaymentMethod_IconWrapper">
            <span
              class="icon_payment"
              v-for="(item, index) in paymentMethodNotCreditCard"
              :key="index">
              <img :src="`${baseUrl}${item.logoUrl}`">
            </span>
          </div>
        </div>

        <div class="PaymentMethod_Provider">
          <h3 class="title-sub">Credit cards</h3>
          <div class="PaymentMethod_IconWrapper">
            <span
              class="icon_payment"
              v-for="(item, index) in paymentMethodCreditCard"
              :key="index">
              <img :src="`${baseUrl}${item.logoUrl}`">
            </span>
          </div>
        </div>
      </div>

      <app-checkbox
        id="terms"
        label="By placing the order I confirm that I have read and agree to the">
        <a class="link" href="#"> terms</a>
      </app-checkbox>

      <app-button
        type="submit"
        @click.prevent.stop="submit"
      >
        confirm order
      </app-button>

      <div class="flex-center secureType">
        <span class="icon_secure"><img src="~assets/images/secure_ssl.svg"></span>
        <span class="icon_secure"><img src="~assets/images/secure_paypal.svg"></span>
      </div>
    </div>

    <div class="PaymentMethod_Footer">
      <h2 class="title">Why Try&Buy?</h2>
      <p
         class="UpsItem"
         v-for="(item, index) in product.ups"
         :key="index">
         <app-icon name="tick" />
         {{ item }}
      </p>
    </div>
  </section>
</template>
<script>
  import CheckoutNav from 'components/CheckoutNav'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'checkout-payment-method',

    components: {
      CheckoutNav
    },

    data () {
      return {
        baseUrl: process.env.BASE_URL
      }
    },

    computed: {
      ...mapState('checkout', ['product']),
      ...mapGetters('checkout', ['paymentMethodCreditCard', 'paymentMethodNotCreditCard'])
    },

    created () {
      this.$store.dispatch('checkout/fetchPaymentMethods')
    }
  }
</script>

<style lang="scss">
  .PaymentMethod {
    &_Wrapper {
      background: #f2f2f2;
      margin-bottom: .22rem;
      padding: .24rem .1rem;
      border-radius: .02rem;

      @include media(tablet) {
        display: flex;
        padding: .36rem .24rem .24rem;
      }
    }

    &_Select {
      margin-bottom: .28rem;
    }

    &_Provider {
      margin-bottom: .12rem;

      @include media(tablet) {
        margin-left: .86rem;
      }
    }

    &_IconWrapper {
      margin-top: .1rem;
    }

    &_Footer {
      border-top: solid .02rem #d8d8d8;
      padding: .4rem .1rem;

      @include media(tablet) {
        border-top: none;
        padding-top: 0;
      }

      .title {
        margin-bottom: .22rem;
      }
    }

    .UpsItem {
      display: flex;
      margin-bottom: .2rem;
      font-size: .17rem;
      font-weight: 400;
      line-height: 1;
      color: #3c3c3c;

      @include media(tablet) {
        font-size: .21rem;
      }

      .icon-tick {
        margin-right: .08rem;
      }
    }

    .secureType {
      margin-bottom: .46rem;
      margin-top: .46rem;

      @include media(tablet) {
        margin-bottom: .56rem;
        margin-top: .34rem;
      }
    }

    .icon_payment {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: .9rem;
      height: .57rem;
      border: solid 1px $icon-border-color;
      border-radius: .02rem;
      background: #eee;
      vertical-align: middle;

      &.selected {
        background: $pink;
      }

      + .icon_payment {
        margin-left: .12rem;
      }
    }

    .icon_secure {
      + .icon_secure {
        margin-left: .26rem;
      }
    }

    .title-sub {
      line-height: 1;
    }
  }
</style>
