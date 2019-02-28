<template>
  <div class="MyAccountMenuMobile">
    <div class="MyAccountMenuMobile_Nav">
      <h3 class="title">My subscriptions</h3>
      <app-select
        v-model="itemSelected"
        :options="menuOptions || []"
        :allow-empty="false"
        :show-labels="false"
        :searchable="false"
        open-direction="bottom"
        label="name"
        track-by="name"
      >
        <template slot="option" slot-scope="props">
          <router-link
            class="multiselect__option"
            :to="props.option.route.path"
            :key="props.option.name"
          >
            {{ props.option.name }}
          </router-link>
        </template>
      </app-select>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'my-account-menu-mobile',

    props: {
      menuOptions: {
        type: Array,
        required: true
      }
    },

    computed: {
      itemSelected () {
        let routerName = this.$route.name.replace('-', ' ')
        let itemSelected = {}

        this.menuOptions.forEach(function (item) {
          if (item.name.toLowerCase() === routerName.toLowerCase()) {
            itemSelected = item
          }
        })

        return itemSelected
      }
    }
  }
</script>
<style lang="scss">
  .MyAccountMenuMobile {
    position: absolute;
    width: 100%;
    bottom: .4rem;
    z-index: 10;
    padding-left: .2rem;
    padding-right: .2rem;

    .title {
      font-size: .3rem;
      color: $white;
      margin-bottom: .14rem;
    }

    .multiselect {
      min-width: .5rem;
      color: #212121;

      &__option {
        color: #212121;
        line-height: .32rem;
        padding: .05rem;

        &--highlight {
          background: $white;
        }

        &--selected {
          background: #0066a1;
        }
      }

      &__element {
        > .multiselect__option {
          padding-top: .03rem;
          padding-bottom: .03rem;
        }
      }

      &__tags {
        padding-top: .13rem;
        padding-bottom: .13rem;
      }

      &__content-wrapper {
        max-height: 2rem !important;
      }
    }

    &_View {
      padding-left: .1rem;
      padding-right: .1rem;

      .title {
        padding-left: .1rem;
        padding-right: .1rem;
        margin-top: .24rem;
        margin-bottom: .13rem;
      }
    }
  }
</style>
