<template>
  <footer class="Footer">
    <div class="container ">
      <div class="Footer_top">
        <div class="Footer_pic">
          <img src="@/assets/images/foot-logo.svg" alt="" class="Footer_pic-logo">
        </div>
        <div class="Footer_top-logo">
          <p class="tip">Blijf op de hoogte van Philips   </p>
          <div class="socialIcon">
            <app-icon name="twitter"/>
            <app-icon name="facebook"/>
            <app-icon name="youtube"/>
            <app-icon name="linkedin"/>
            <app-icon name="pinterest"/>
            <app-icon name="insta"/>
          </div>
        </div>
        <div class="Footer_top-location">
          <div class="flex Footer_top-select">
            <span class="select_label">Select country</span>
            <span class="selected">{{ country }}<i class="select_arrow">></i></span>
          </div>
          <div class="flex Footer_top-select">
            <span class="select_label">Select site</span>
            <span class="selected">{{ site }} <i class="select_arrow">></i></span>
          </div>
        </div>
      </div>
      <div class="Footer_bottom">
        <ul class="Footer_bottom-nav">
          <li v-for="link in links" :key="link.text"><a :href="link.url"> {{ link.text }}</a></li>
        </ul>
        <p>© Koninklijke Philips N.V., 2004 - 2018. Alle rechten voorbehouden.</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'app-footer',
    data () {
      return {
        country: 'Nederland - Nederlands ',
        site: 'Philips - Nederland ',
        links: []
      }
    },
    created () {
      Vue.api.common.getLinks().then(data => {
        this.links = data.footerLinks
      })
    }
  }
</script>

<style lang="scss">
  .Footer {
    padding-top: .65rem;
    padding-bottom: .68rem;
    background-image: linear-gradient(to bottom right, #d31e4f 9%, #f2819f 100%);
    font-weight: 400;

    .container {
      text-align: center;
      padding-left: .24rem;
      padding-right: .24rem;
    }

    &_top {
      .tip {
        color: #b3c8e6;
        line-height: .24rem;
        margin-bottom: .08rem;
      }

      &-logo {
        margin-top: .39rem;

        img {
          width: 2.1rem;
          height: .35rem;
        }
      }

      &-select {
        justify-content: center;

        label {
          color: #b3c8e6;
          align-items: center;
          display: flex;
          margin-left: .09rem;
        }

        .select_label {
          color: #b3c8e6;
          margin-right: .09rem;
        }

        span {
          color: $body-bg;
          outline: none;
          border: 0;
          background: none;
          width: auto;
          font-size: .14rem;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          text-align: right;
        }

        .selected {
          display: flex;
          position: relative;

          span {
            color: $body-bg;
            position: absolute;
            right: 0;
            top: 0;
            display: none;
          }
        }

        .select_arrow {
          display: none;
          margin-left: .05rem;
        }
      }

      &-location {
        margin-top: -.05rem;
        line-height: .24rem;
      }
    }

    &_bottom {
      padding-top: .52rem;

      &-nav {
        li {
          list-style: none;
          display: inline-block;
          color: $body-bg;
          line-height: .24rem;

          a {
            color: $body-bg;
            padding: 0 .05rem;
            line-height: .14rem;
            border-right: .015rem solid #fff;
          }
        }

        li:last-child a {
          border-right: none;
        }
      }

      p {
        color: #b3c8e6;
        line-height: .24rem;
      }
    }

    .socialIcon {
      margin-bottom: .14rem;
    }
  }

  @include media(tablet) {
    .Footer {
      padding-top: .7rem;
      padding-bottom: .3rem;

      &_pic {
        order: 2;
      }

      // &_bottom {
      //   padding-top: .52rem;
      // }

      &_top {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .tip {
          text-align: left;
        }

        &-logo {
          order: 1;
          margin-top: 0;
        }

        &-location {
          order: 3;
        }

        &-select {
          justify-content: flex-end;

          .selected {
            span {
              display: block;
            }
          }
        }

        .select_arrow {
          display: block;
        }
      }

      .socialIcon {
        margin-bottom: 0;
      }
    }
  }

  .theme-official {
    .Footer {
      background-color: #0096ee;
      background-repeat: repeat-x;
      background-image: linear-gradient(to bottom right, #003655 0, #0066a1 50%, #0096ee 100%);
    }
  }
</style>
