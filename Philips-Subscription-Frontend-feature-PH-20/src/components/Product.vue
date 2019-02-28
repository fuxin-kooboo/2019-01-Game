<template>
  <section class="CheckoutProduct Product">
    <div class="img-holder">
      <img class="Product_img" :src="product.image">
    </div>
    <div class="Product_info">
      <h3 class="Product_name">{{product.name}}</h3>
      <p class="Product_price"><span class="price-month">{{product.price[0] }},{{product.price[1] }}</span> / month</p>
      <p class="Product_name-sub">{{product.subName}}</p>
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'active-subscriptions',

    props: {
      product: {
        type: Object,
        default () {
          return {
            image: require('@/assets/images/account-product.png'),
            name: 'Lumea Prestige Try&Bye',
            subName: 'Start date:21/12/2017',
            detailsLink: 'https://rb2.nl/',
            orderLink: 'https://rb2.nl/',
            price: ['€39', '95']
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .Product {
    background: $block-bg;
    display: flex;
    justify-content: space-around;
    margin: 0 0;

    .img-holder {
      display: inline-flex;
      width: 1.24rem;
      height: 1.24rem;
      align-items: center;
      justify-content: center;
      margin-top: -.07rem;

      @include media(tablet) {
        width: 1.36rem;
        height: 2.05rem;
        margin-right: .15rem;
        margin-top: .24rem;
      }
    }

    &_img {
      max-height: 100%;
      width: .77rem;
      height: 1.23rem;

      @include media(tablet) {
        width: 2.28rem;
        height: 2.28rem;
        margin-top: .2rem;
      }
    }

    &_info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @include media(tablet) {
        justify-content: flex-start;
      }
    }

    &_name {
      font-size: .18rem;
      line-height: .27rem;
    }

    &_name-sub {
      font-size: .14rem;
      line-height: .2rem;
      color: #666;
      font-weight: 500;
    }

    &_price {
      font-size: .14rem;
      line-height: 1.2;
      font-weight: 700;
      color: #666;

      @include media(tablet) {
        font-size: .17rem !important;
        font-weight: 700;
        color: #666;
      }

      .price-month {
        font-weight: 700;
        font-size: .14rem;
        line-height: inherit;
        height: auto;

        @include media(tablet) {
          font-size: .17rem !important;
        }

        sup {
          font-size: 53.58%;
          top: -.08rem;

          @include media(tablet) {
            font-size: .17rem !important;
          }
        }
      }
    }

    .AppEditButton {
      margin: 0 .15rem;
    }

    @include media(tablet) {
      margin: .1rem 0 0;
      background: $white;
      font-size: .17rem;
      padding: 0 .22rem 0 .29rem;
      margin-right: .24rem;

      .Product_info {
        @include media(tablet) {
          margin-top: .27rem;
          padding: 0 0;
        }
      }

      &_name {
        font-size: .24rem;
        font-weight: 500;

        @include media(tablet) {
          margin-bottom: .2rem;
          line-height: .28rem;
          font-weight: 700;
        }
      }

      &_name-sub {
        font-size: .16rem;
        line-height: .26rem;
        font-weight: 500 !important;
        color: #666;

        @include media(tablet) {
          font-size: .17rem;
          font-weight: 500;
        }
      }

      .AppEditButton {
        margin: .18rem 0;
      }
    }
  }
</style>
