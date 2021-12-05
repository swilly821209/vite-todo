import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhHant from './locales/zh-hant.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    zhHant
  }
})

const app = createApp(App)
app.use(i18n).mount('#app')

