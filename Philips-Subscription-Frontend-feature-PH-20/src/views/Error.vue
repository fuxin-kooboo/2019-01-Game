<template>
  <div class="Error">
    <div class="Error_header">
      <div class="Error_header_top">
        <div class="container">
          Lumea Lease
        </div>
      </div>
      <div class="Error_header_body">
        <div class="content">
          <div class="img_holder">
            <!-- <app-icon name="tick-red" /> -->
            <img src="@/assets/images/fail-emotion.png" alt="" class="fail-emotion">
          </div>
          <p class="info">
            Oops,something went wrong
          </p>
          <p class="error_tips">
            Your payment didn't go through
          </p>
        </div>
      </div>
    </div>
    <div class="Error_body">
      <div class="container">
        <p class="tips">
            Please, review your payment details to fix the problem or contact support for more information.
        </p>
        <div class="backpage">
          <input type="button" value="< Back to payment details" class="back flex">
          <app-button>
            My Account
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .Error {
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
        padding: .12rem .3rem .5rem;
        font-weight: 700;

        @include media(tablet) {
          padding-top: .17rem;
        }

        @include media(tablet) {
          .content {
            width: 4.37rem;
          }
        }

        .img_holder {
          margin: 0 auto;
          position: relative;

          .fail-emotion {
            width: .27rem;
            height: .27rem;
            margin-top: .28rem;

            @include media(tablet) {
              width: .35rem;
              height: .35rem;
              margin-top: .2rem;
            }
          }
        }

        .info {
          margin-top: .17rem;
          font-size: .26rem;
          padding: 0 .4rem;
          line-height: .22rem;

          @include media(tablet) {
            margin-top: .15rem;
            padding: 0 .9rem;
          }
        }

        .error_tips {
          font-size: .16rem;
          line-height: 1.35;
          font-weight: 400;
        }
      }
    }

    &_body {
      padding: .27rem 0 1rem;

      .tips {
        font-size: .17rem;
        line-height: .25rem;
        display: flex;
        margin-bottom: .3rem;
        font-weight: 400;
      }

      .backpage {
        .back {
          justify-content: center;
          align-items: center;
          background: $white;
          border-radius: .02rem;
          padding: .08rem .15rem;
          color: $pink-deeper;
          font-size: .17rem;
          font-weight: 400;
          width: 100%;
          border: .01rem solid $pink-deeper;
          margin-bottom: .15rem;
          height: 35px;
        }

        .AppButton {
          font-weight: 400;
        }
      }

      @include media(tablet) {
        padding: .37rem 0 1.25rem;

        .tips {
          justify-content: center;
          padding: 0 1.75rem;
          text-align: center;
          margin-bottom: .46rem;
        }

        .Error {
          &_body {
            font-size: .2rem;

            .container {
              .tips {
                text-align: center;
                width: 100%;
              }
            }
          }
        }

        .AppButton {
          min-width: 3.55rem;
          // font-weight: 400 !important;
          order: 1;
        }

        .backpage {
          display: flex;
          justify-content: center;

          .AppButton {
            font-weight: 400 !important;
          }

          .back {
            max-width: 3.55rem;
            order: 2;
            margin-bottom: 0;
            margin-left: .21rem;
          }
        }
      }

      .info-product {
        margin-bottom: .55rem;

        .title {
          font-weight: 700;
          color: $purple;
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>
