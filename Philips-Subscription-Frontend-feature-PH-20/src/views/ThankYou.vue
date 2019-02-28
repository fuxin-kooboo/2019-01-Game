<template>
  <div class="Confirmation">
    <div class="Confirmation_header">
      <div class="Confirmation_header_top">
        <div class="container">
          Lumea Lease
        </div>
      </div>
      <div class="Confirmation_header_body">
        <div class="content">
          <div class="img_holder">
            <img :src="`${baseUrl}${product.image}`" :alt="product.name" v-if="product.image">
            <app-icon name="tick-red" />
          </div>
          <p class="info">
            The payment was succesful. You will recieve a confirmation email shortly
          </p>
        </div>
      </div>
    </div>
    <div class="Confirmation_body">
      <div class="container">
        <div class="info info-product" v-if="product.relevantTips">
          <h2 class="title">
            Pre-treatment
          </h2>
          <ul class="tips-product">
            <li v-for="(tips, index) in product.relevantTips" :key="index">
              <span class="number">{{ ++index }}.</span>
              <p>{{ tips }}</p>
            </li>
          </ul>
          <router-link
            :to="{ path: '/my-account'}"
            class="AppButton"
          >
            Your subscription account
          </router-link>
        </div>
        <div class="info info-promote">
          <div class="row">
            <div class="col-md-6">
              <div class="img-holder">
                <img src="@/assets/images/promote.jpg" alt="promote-app">
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-promote_body">
                <h3 class="title-small">Download the app</h3>
                <p>Philips Lumea IPL app is your partner, helping you get the best results to be hair free and care free.</p>
                <div class="store-app">
                  <a href="##"><img src="@/assets/images/appstore.jpg" alt="appstorep"></a>
                  <a href="##"><img src="@/assets/images/google-play.jpg" alt="google-play"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'comfirmation',

    data () {
      return {
        baseUrl: process.env.BASE_URL
      }
    },

    computed: {
      ...mapState('checkout', ['product'])
    }
  }
</script>

<style lang="scss">
  .Confirmation {
    &_header {
      background-image: linear-gradient(145deg, #6e0c3b 9%, #c42468 100%);
      color: #fff;
      font-size: .21rem;

      &_top {
        border-bottom: .01rem solid rgba(151, 151, 151, .5);
        font-size: .19rem;
        padding: .2rem .08rem;
        line-height: 1.1;
        font-weight: 500;

        .container {
          padding-left: 0;
          padding-right: 0;

          @include media(tablet) {
            padding-left: .15rem;
            padding-right: .15rem;
          }
        }
      }

      &_body {
        border-top: .01rem solid rgba(255, 255, 255, .5);
        display: flex;
        justify-content: center;
        text-align: center;
        padding: .12rem .3rem .33rem;
        font-weight: 700;

        @include media(tablet) {
          .content {
            width: 4.37rem;
          }
        }

        .img_holder {
          width: 1.12rem;
          height: 1.12rem;
          margin: 0 auto;
          position: relative;
        }

        .info {
          margin-top: .12rem;

          @include media(tablet) {
            margin-top: .06rem;
          }
        }

        .icon-tick-red {
          position: absolute;
          bottom: .22rem;
          right: .2rem;
        }
      }
    }

    &_body {
      padding: .28rem 0 1rem;

      @include media(tablet) {
        padding: .5rem 0 1rem;
      }

      .info-product {
        margin-bottom: .55rem;

        .title {
          font-weight: 700;
          color: $purple;
          margin-bottom: .2rem;
        }

        .AppButton {
          @include media(tablet) {
            min-width: 3.05rem;
          }
        }
      }

      .tips-product {
        li {
          font-size: .17rem;
          line-height: .25rem;
          display: flex;
          margin-bottom: .24rem;
        }

        .number {
          font-size: .17rem;
          font-weight: 800;
          color: $pink-deeper;
          margin-right: .15rem;
        }
      }

      .info-promote {
        .img-holder {
          margin-bottom: .22rem;
        }

        img {
          width: 100%;
        }

        &_body {
          font-size: .17rem;
          line-height: .25rem;

          p {
            margin-bottom: .17rem;
          }

          .store-app {
            a {
              margin-right: .12rem;
            }
          }
        }

        @include media(tablet) {
          padding: .15rem;
          background: $block-bg;

          .img-holder {
            margin-bottom: 0;
          }

          &_body {
            max-width: 3.35rem;
            padding: 0 .2rem;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
</style>
