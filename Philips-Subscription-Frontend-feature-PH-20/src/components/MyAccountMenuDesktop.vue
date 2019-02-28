<template>
  <div class="flex MyAccountMenuDesktop">
    <div class="MyAccountMenuDesktop_Nav">
      <h3 class="title">My subscriptions</h3>
      <nav class="list-unstyle">
        <router-link
          v-for="item in menuOptions"
          tag="li"
          class="nav-item"
          :to="item.route.path"
          :key="item.name"
          >
          <a> {{ item.name }} </a>
        </router-link>
      </nav>
    </div>

    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'my-account-menu-desktop',

    props: {
      menuOptions: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style lang="scss">
  .MyAccountMenuDesktop {
    width: 9.6rem;
    max-width: 100%;
    margin: -.7rem auto 0;
    min-height: 6.4rem;

    .title {
      font-size: .21rem;
      color: $white;
      margin-bottom: .2rem;
    }

    &_Nav {
      width: 3.04rem;
      padding: .44rem .42rem .44rem .2rem;
      background-color: #1474a4;

      .nav-item {
        border-bottom: .01rem solid $white;

        &:nth-last-of-type(1) {
          border-bottom: none;
        }

        > a {
          color: #daf1f7;
          font-size: .17rem;
          font-weight: 500;
          padding: .17rem .07rem;
          display: block;
        }

        &.router-link-active,
        &:hover,
        &.active {
          > a {
            color: $white;
            font-weight: 700;
          }
        }
      }
    }

    &_View {
      width: calc(100% - 3.04rem);
      padding: .52rem .23rem;
      background: #f8f8f8;

      .title {
        color: #252525;
        border-bottom: .01rem solid #9b9b9b;
        padding: 0 .15rem .15rem;
      }
    }
  }
</style>
