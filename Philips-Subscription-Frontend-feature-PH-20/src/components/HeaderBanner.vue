<template>
  <div class="HeaderBanner">
    <picture class="Imgholder">
      <source media="(max-width: 375px)" :srcset="imgSrcMobile">
      <source media="(min-width: 376px)" :srcset="imgSrcDesktop">
      <img class="BannerImg" :src="imgSrcDesktop" alt="BannerImg">
    </picture>

    <div class="HeaderBanner_top">
      <div class="container ProductName">Lumea Lease</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'header-banner',

    props: {
      imgSrcMobile: {
        type: String,
        default: require('assets/images/checkout-banner-img.png')
      },

      imgSrcDesktop: {
        type: String,
        default: require('assets/images/checkout-banner-img.png')
      }
    }
  }
</script>
<style lang="scss">
  .HeaderBanner {
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(14deg, rgba(0, 0, 0, 0) 0%, #000 100%);
      opacity: .4;
    }

    &_top {
      border-bottom: .01rem solid rgba(151, 151, 151, .5);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      font-size: .19rem;
      padding: .2rem 0;
      line-height: 1.1;
      font-weight: 500;
      color: $white;

      &::after {
        content: '';
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, .5);
        height: .01rem;
        width: 100%;
        bottom: -.03rem;
      }

      .ProductName {
        z-index: 1;
      }
    }

    .Imgholder {
      position: relative;
      z-index: -1;
    }

    .BannerImg {
      width: 100%;
      object-fit: cover;
    }
  }
</style>
