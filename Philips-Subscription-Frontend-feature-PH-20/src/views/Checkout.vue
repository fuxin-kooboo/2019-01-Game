<template>
  <div class="CheckoutPage">
    <header-banner>
      <div class="container container-product">
        <checkout-product />
      </div>
    </header-banner>

    <div class="container container-checkout">
      <checkout-product class="show-mobile"/>

      <checkout-personal-detail />

      <checkout-shipping-address />

      <check-payment-method />
    </div>
  </div>
</template>

<script>
  import CheckoutShippingAddress from 'components/CheckoutShippingAddress'
  import CheckoutPersonalDetail from 'components/CheckoutPersonalDetail'
  import CheckoutProduct from 'components/CheckoutProduct'
  import CheckPaymentMethod from 'components/CheckPaymentMethod'
  import HeaderBanner from 'components/HeaderBanner'

  export default {
    components: {
      CheckoutShippingAddress,
      CheckoutPersonalDetail,
      CheckoutProduct,
      CheckPaymentMethod,
      HeaderBanner
    }
  }
</script>

<style lang="scss">
  .CheckoutPage {
    .HeaderBanner {
      display: none;

      &::after {
        display: none;
      }

      @include media(tablet) {
        display: block;
      }
    }

    .BannerImg {
      height: 2.9rem;
    }
  }

  .container-checkout {
    max-width: 8.28rem;

    @include media(tablet) {
      > section {
        margin-bottom: .4rem;
      }
    }

    .AppButton {
      width: 100%;
    }
  }

  .container-product {
    max-width: 8.28rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
