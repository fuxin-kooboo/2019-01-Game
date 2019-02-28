<template>
  <div class="MyAccoutPage">
    <header-banner
       :img-src-mobile="imgSrcMobile"
       :img-src-desktop="imgSrcDesktop">
       <my-account-menu-mobile
         class="show-mobile"
         :menu-options="menuOptions" />
    </header-banner>

    <div class="MyAccout container">
      <my-account-menu-desktop
        class="hide-mobile"
        :menu-options="menuOptions"
      >
        <div class="MyAccountMenuDesktop_View">
          <h2 class="title">{{ pageTitle }}</h2>
          <router-view />
        </div>
      </my-account-menu-desktop>

      <div class="MyAccountMenuMobile_View show-mobile">
        <h2 class="title">{{ pageTitle }}</h2>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBanner from 'components/HeaderBanner'
  import MyAccountMenuMobile from 'components/MyAccountMenuMobile'
  import MyAccountMenuDesktop from 'components/MyAccountMenuDesktop'

  export default {
    name: 'my-account',

    components: {
      HeaderBanner,
      MyAccountMenuMobile,
      MyAccountMenuDesktop
    },

    data () {
      return {
        imgSrcDesktop: require('assets/images/myaccount-banner-img-desktop.png'),
        imgSrcMobile: require('assets/images/myaccount-banner-img-mobile.png'),
        pageTitle: 'Active subscriptions',
        menuOptions: [
          { name: 'Overview', route: { path: '/my-account/overview' } },
          { name: 'Personal details', route: { path: '/my-account/personal-details' } },
          { name: 'Payment details', route: { path: '/my-account/payment-details' } },
          { name: 'Billing', route: { path: '/my-account/billing' } },
          { name: 'Support', route: { path: '/my-account/support' } }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .MyAccout {
    padding: 0 0 20px 0;
  }

  .MyAccoutPage {
    .HeaderBanner_top {
      color: #0066a1;
    }

    .BannerImg {
      height: 2.5rem;

      @include media(tablet) {
        height: 3.49rem;
      }
    }
  }
</style>
