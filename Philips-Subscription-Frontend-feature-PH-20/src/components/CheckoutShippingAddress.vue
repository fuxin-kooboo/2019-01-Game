<template>
  <section class="ShippingAddress">
    <div class="ShippingAddress_header flex-between align-items-end">
      <h2 class="title">Shipping address</h2>
      <checkout-nav :stepNumer="2"/>
    </div>
    <form class="ShippingAddress_form">
      <div class="SelectGroup" :class="{'error': errorsFor('selectedCountry').length > 0}">
        <app-select
          placeholder="Select your country"
          v-model="selectedCountry"
          :options="countries || []"
          :searchable="false"
          :allow-empty="false"
          :show-labels="false"
          open-direction="bottom"
          label="country"
          track-by="countryCode"
        />
      </div>
      <app-text-input
        type="text"
        placeholder="Postal code"
        v-model.trim="postalCode"
        :errors="errorsFor('postalCode')"
      />
      <div class="row">
        <div class="col-6 col-md-12">
          <app-text-input
            type="text"
            placeholder="House number"
            v-model.trim="houseNumber"
            :errors="errorsFor('houseNumber')"
          />
        </div>
        <div class="col-6 col-md-12">
          <app-text-input
            type="text"
            placeholder="Addition"
            v-model.trim="addition"
          />
        </div>
      </div>
      <app-checkbox
         id="other-address"
         label="I have a different billing address"
         :value="hasBillingAddress"
         @input="hasBillingAddress = $event"
      />

       <section class="ShippingAddress-billing" v-if="hasBillingAddress">
        <div class="ShippingAddress_header flex-between align-items-end">
          <h2 class="title">billing address</h2>
        </div>
        <form class="ShippingAddress_form">
          <div class="SelectGroup" :class="{'error': errorsFor('selectedBillingCountry').length > 0}">
            <app-select
              placeholder="Select your country"
              v-model="selectedBillingCountry"
              :options="countries || []"
              :searchable="false"
              :allow-empty="false"
              :show-labels="false"
              open-direction="bottom"
              label="country"
              track-by="countryCode"
            />
          </div>
          <app-text-input
            type="text"
            placeholder="Postal code"
            v-model.trim="billingPostalCode"
            :errors="errorsFor('billingPostalCode')"
          />
          <div class="row">
            <div class="col-6 col-md-12">
              <app-text-input
                type="text"
                placeholder="House number"
                v-model.trim="billingHouseNumber"
                :errors="errorsFor('billingHouseNumber')"
              />
            </div>
            <div class="col-6 col-md-12">
              <app-text-input
                type="text"
                placeholder="Addition"
                v-model.trim="billingAddition"
              />
            </div>
          </div>
        </form>
      </section>
      <app-button
        type="submit"
        @click.prevent.stop="submit"
      >
        Save
      </app-button>
    </form>
  </section>
</template>

<script>
  import CheckoutNav from './CheckoutNav'
  import { required } from 'vuelidate/lib/validators'
  import { getErrors } from '@/utilities/common'
  import { postalCode } from '@/utilities/common/validators'

  export default {
    name: 'checkout-shipping-address',

    data () {
      return {
        countries: [
          { countryCode: 'NL', country: 'Nederland' },
          { countryCode: 'NA', country: 'North America' }
        ],
        showValidations: false,
        selectedCountry: null,
        postalCode: '',
        houseNumber: '',
        addition: '',
        hasBillingAddress: false,
        selectedBillingCountry: null,
        billingPostalCode: '',
        billingHouseNumber: '',
        billingAddition: ''
      }
    },

    computed: {
      address () {
        return ({
          shippingAddress: {
            countryCode: this.selectedCountry.countryCode,
            postalCode: this.postalCode,
            houseNumber: this.houseNumber,
            addition: this.addition
          },
          hasBillingAddress: this.hasBillingAddress,
          billingAddress: this.hasBillingAddress ? {
            countryCode: this.selectedCountry.countryCode,
            postalCode: this.billingPostalCode,
            houseNumber: this.billingHouseNumber,
            addition: this.billingAddition
          } : {
            countryCode: this.selectedCountry.countryCode,
            postalCode: this.postalCode,
            houseNumber: this.houseNumber,
            addition: this.addition
          }
        })
      }
    },

    validations () {
      if (!this.hasBillingAddress) {
        return {
          postalCode: {
            required,
            postalCode
          },
          houseNumber: {
            required
          },
          selectedCountry: {
            required
          }
        }
      } else {
        return {
          postalCode: {
            required,
            postalCode
          },
          houseNumber: {
            required
          },
          selectedCountry: {
            required
          },
          billingPostalCode: {
            required,
            postalCode
          },
          billingHouseNumber: {
            required
          },
          selectedBillingCountry: {
            required
          }
        }
      }
    },

    methods: {

      errorsFor (field) {
        if (!this.showValidations) {
          return []
        }

        if (this.$v[field] == null) {
          return []
        }

        return getErrors(this.$v[field])
      },

      submit () {
        this.showValidations = true
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.$notify({
            type: 'error',
            title: 'validation error [TODO]'
          })
        } else {
          this.$store.dispatch('checkout/submitAddress', this.address)
        }
      }
    },

    components: {
      CheckoutNav
    }
  }
</script>

<style lang="scss">
  .ShippingAddress {
    &_header {
      padding: .2rem .1rem;
    }

    .multiselect {
      margin-bottom: .3rem;

      &__tags {
        border-width: 0 0 .02rem 0;
        border-color: $border-color;
      }
    }

    &-billing {
      .ShippingAddress_header {
        padding: 0 .1rem .2rem .1rem;
      }
    }

    .SelectGroup.error {
      .multiselect__tags {
        border-color: $pink;
      }
    }
  }
</style>
