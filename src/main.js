import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhHant from './locales/zh-hant.json'
import ja from './locales/ja.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    zhHant,
    ja
  }
})

const app = createApp(App)
app.use(i18n).mount('#app')
