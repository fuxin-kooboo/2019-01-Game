import TextInput from './app-input/TextInput'
import PasswordInput from './app-input/PasswordInput'
import AppSelect from 'vue-multiselect'
import AppButton from './AppButton'
import AppCheckbox from './AppCheckbox'
import AppIcon from './AppIcon'
import AppEditButton from './AppEditButton'

export default function (Vue) {
  Vue.component('app-text-input', TextInput)
  Vue.component('app-password-input', PasswordInput)
  Vue.component('app-select', AppSelect)
  Vue.component('app-button', AppButton)
  Vue.component('app-checkbox', AppCheckbox)
  Vue.component('app-icon', AppIcon)
  Vue.component('app-edit-button', AppEditButton)
}
