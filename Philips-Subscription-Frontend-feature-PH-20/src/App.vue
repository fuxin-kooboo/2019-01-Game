<template>
  <div id="app" :class="{'theme-official': isMyAccountPage }">
    <notifications position="top center" class="app-notification" />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
  export default {
    computed: {
      routePath () {
        return this.$route.path
      },

      isMyAccountPage () {
        return /^(\/my-account)/.test(this.routePath)
      }
    },

    created () {
      this.$store.dispatch('checkout/fetchProduct')
    }
  }
</script>

<style lang="scss">
  .main {
    padding-top: .48rem;
  }
</style>
