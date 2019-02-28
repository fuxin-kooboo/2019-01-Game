<template>
  <header class="Header">
    <div class="container">
      <h1 class="Logo">
        <router-link to="/" >
          <img class="Logo_img" src="@/assets/images/logo.svg" alt="philips">
        </router-link>
      </h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style lang="scss">
  .Header {
    height: .48rem;
    background: $pink;
  }

  .Logo {
    display: inline-flex;
    position: relative;
    background: #fff;
    border-bottom-right-radius: .15rem;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: .28rem;
      background-image: linear-gradient(90deg, #6d0a3e 7%, #b41658 96%);
      z-index: -1;
      bottom: -.08rem;
      left: 0;
    }

    a {
      width: .95rem;
      height: .44rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    &_img {
      width: .79rem;
      height: auto;
    }
  }

  .theme-official {
    .Header {
      background: #1474a4;
    }

    .Logo {
      &::after {
        background-image: linear-gradient(to right, #1d4c84 0, #1474a4 100%);
      }
    }
  }
</style>
