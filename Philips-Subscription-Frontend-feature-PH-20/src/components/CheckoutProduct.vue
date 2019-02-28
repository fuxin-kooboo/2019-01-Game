<template>
  <section class="CheckoutProduct Product">
    <div class="img-holder">
      <img class="Product_img" :src="`${baseUrl}${normalizedProduct.image}`" :alt="normalizedProduct.name" v-if="normalizedProduct.image">
    </div>
    <div class="Product_info">
      <h3 class="Product_name">{{ normalizedProduct.name }}</h3>
      <p class="Product_name-sub">{{ normalizedProduct.subName}}</p>
      <p class="Product_price"><span class="price-month">{{ normalizedProduct.price[0] }},<sup>{{ normalizedProduct.price[1] }}</sup></span> / month</p>
    </div>
    <!-- <div class="btn-wrapper">
      <app-edit-button />
    </div> -->
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'checkout-product',

    data () {
      return {
        baseUrl: process.env.BASE_URL
      }
    },

    computed: {
      ...mapGetters('checkout', ['normalizedProduct'])
    },

    created () {
      this.$store.dispatch('checkout/fetchProduct')
    }
  }
</script>

<style lang="scss">
  .Product {
    background: $block-bg;
    padding: .27rem 0 .14rem;
    display: flex;
    justify-content: space-around;
    margin: 0 ($container-padding / -2);

    .img-holder {
      display: inline-flex;
      width: 1.24rem;
      height: 1.24rem;
      align-items: center;
      justify-content: center;
    }

    &_img {
      max-height: 100%;
      width: auto;
    }

    &_info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &_name {
      font-size: .18rem;
      line-height: .3rem;
    }

    &_name-sub {
      font-size: .14rem;
      line-height: .22rem;
      color: #666;
    }

    &_price {
      font-size: .18rem;
      line-height: .35rem;
      font-weight: 400;

      .price-month {
        font-size: .28rem;
        font-weight: 700;
        line-height: inherit;
        height: auto;

        sup {
          font-size: 53.58%;
          top: -.08rem;
        }
      }
    }

    .AppEditButton {
      margin: 0 .15rem;
    }

    @include media(tablet) {
      margin: .2rem 0 0;
      background: $white;
      border: .01rem solid #979797;
      padding: 0 .22rem 0 .29rem;

      .img-holder {
        width: 1.72rem;
        height: 1.72rem;
      }

      .Product_info {
        padding: 0 .43rem;
      }

      &_name {
        font-size: .24rem;
        font-weight: 500;
      }

      &_name-sub {
        font-size: .16rem;
        line-height: .28rem;
      }

      .AppEditButton {
        margin: .18rem 0;
      }
    }
  }
</style>
