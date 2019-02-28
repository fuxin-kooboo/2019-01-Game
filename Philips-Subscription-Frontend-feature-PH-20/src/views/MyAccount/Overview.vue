<template>
  <div class="MyAccoutPage_Overview">
    <div class="ProductItem" v-for="(productItem, index) in productSubscription" :key="index" :product="productItem">
      <product class="flex">
        <p class="links"><router-link to="https://rb2.nl/">Subscription details ></router-link></p>
        <p class="links"><router-link to="https://rb2.nl/">Track your order ></router-link></p>
        <app-button class="hide-mobile">
          Pay in full now
        </app-button>
      </product>
      <app-button class="show-mobile">
        Pay in full now
      </app-button>
    </div>
  </div>
</template>

<script>
  import Product from 'components/Product'
  import { mapState } from 'vuex'

  export default {
    name: 'overview',

    // data () {
    //   return {
    //     ProductList: [
    //       {
    //         image: require('@/assets/images/account-product.png'),
    //         name: 'Lumea Prestige Try&Bye',
    //         subName: 'Start date:21/12/2017',
    //         price: ['€39', '95']
    //       },
    //       {
    //         image: require('@/assets/images/account-product.png'),
    //         name: 'Lumea Prestige Try&Bye',
    //         subName: 'Start date:21/12/2017',
    //         price: ['€39', '95']
    //       },
    //       {
    //         image: require('@/assets/images/account-product.png'),
    //         name: 'Lumea Prestige Try&Bye',
    //         subName: 'Start date:21/12/2017',
    //         price: ['€39', '95']
    //       }
    //     ]
    //   }
    // },
    computed: {
      ...mapState('myAccount', ['productSubscription'])
    },

    created () {
      this.$store.dispatch('myAccount/fecthProductSubscription')
    },

    components: {
      Product
    }
  }
</script>
<style lang="scss">
  .MyAccoutPage {
    &_Overview {
      @include media(tablet) {
        // padding-right: .22rem;
      }

      .links {
        > a {
          color: $blue;
          font-weight: 500;

          @include media(tablet) {
            line-height: .25rem;
          }
        }

        a:nth-of-type(1) {
          line-height: .26rem;
        }
      }

      .ProductItem {
        padding: .1rem 0;
        border-bottom: .01rem solid #9b9b9b;
      }

      .Product {
        padding: .25rem 0 .36rem;
        background: #f8f8f8;

        @include media(tablet) {
          border: none;
          margin: 0;
        }

        .img-holder {
          margin-top: 0;
          flex: 1;

          @include media(tablet) {
            margin-right: .53rem;
            margin-left: .6rem;
            flex: 0;
          }
        }

        &_img {
          width: initial;
          height: initial;
        }

        &_info {
          margin-top: 0;

          @include media(tablet) {
            flex: 1;
          }
        }
      }

      .Product_price {
        font-size: .14rem;
        line-height: .21rem;

        .price-month {
          font-weight: 700;
          font-size: .14rem;
          line-height: .22rem;

          @include media(tablet) {
            line-height: 1.4;
            font-weight: 700;
          }
        }
      }

      .AppButton {
        margin: .15rem 0 0;
        font-weight: 500;

        @include media(tablet) {
          margin: .36rem 0 0;
          max-width: 2.73rem;
        }
      }
    }
  }
</style>
