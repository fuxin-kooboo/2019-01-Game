<template>
  <section class="PersoanlDetail">
    <div class="PersoanlDetail_header">
      <div class="flex-between align-items-end Form_titleBar">
        <h2 class="title">Personal details</h2>
        <checkout-nav :stepNumer="1"/>
      </div>
      <p class="Form_tip">Already have a Philips account? <a class="link">Login in here ></a></p>
    </div>
    <form
      class="PersoanlDetail_body"
      @sbumit.prevent>
      <div class="row">
        <app-text-input
          class="col-6 col-md-12"
          placeholder="First name"
          v-model.trim="firstName"
          :errors="errorsFor('firstName')"
        />
        <app-text-input
          class="col-6 col-md-12"
          placeholder="Last name"
          v-model.trim="lastName"
          :errors="errorsFor('lastName')"
        />
      </div>
       <app-text-input
         placeholder="Phone number"
         v-model.trim="phoneNumber"
         :errors="errorsFor('phoneNumber')"
       />
       <app-text-input
         placeholder="Email address"
         v-model.trim="emailAddress"
         :errors="errorsFor('emailAddress')"
       />
       <app-password-input
         placeholder="Password"
         v-model.trim="password"
         :errors="errorsFor('password')"
       />
       <app-password-input
         placeholder="Confirm Password"
         v-model.trim="confirmPassword"
         :errors="errorsFor('confirmPassword')"
       />
       <app-checkbox
         id="1"
         label="Philips may send me personalized news and offers. You can log out easily and at any time. ">
        <a class="link" href="#">What does this mean?</a>
       </app-checkbox>
       <app-button
         type="submit"
         @click.prevent="submit">
         Create account
       </app-button>
    </form>
  </section>
</template>

<script>
  import CheckoutNav from './CheckoutNav'
  import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
  import { getErrors } from '@/utilities/common'
  import { tel } from '@/utilities/common/validators'
  import PersonalDetailValidationMixin from 'mixins/personalDetailValidation'

  export default {
    name: 'checkout-personal-detail',

    mixins: [PersonalDetailValidationMixin],

    components: {
      CheckoutNav
    },

    validations: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      emailAddress: {
        required,
        email
      },
      phoneNumber: {
        required,
        tel
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    },

    computed: {
      personalForm () {
        return ({
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.emailAddress,
          password: this.password,
          selectedNewsletter: false // get from checkout box ??
        })
      }
    },

    methods: {
      errorsFor (field) {
        if (!this.showValidations) {
          return []
        }

        if (this.$v[field] == null) {
          return
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
          this.$store.dispatch('account/doSignUp', this.personalForm)
        }
      }
    }
  }
</script>

<style lang="scss">
  .Form {
    &_titleBar {
      margin-top: .24rem;
      margin-bottom: .2rem;
    }

    &_title {
      line-height: 1;
    }
  }

  .PersoanlDetail {
    &_header {
      padding-left: .1rem;
    }
  }
</style>
