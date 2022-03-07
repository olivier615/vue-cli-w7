import { createApp } from 'vue'
import 'bootstrap'
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }) // 載入繁體中文語系
  // validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW')

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(CKEditor)
app.component('Loading', Loading) // eslint-disable-line
app.component('FormTemp', Form)
app.component('FieldTemp', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
