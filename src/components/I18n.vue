<template>
  <div class="mb-6 space-x-2">
    <template v-for="(lang, index) in langs" :key="lang.locale">
      <button
        class="focus:outline-none hover:text-gray-600 border-b border-transparent hover:border-gray-600"
        :class="{ 'font-bold': locale === lang.locale }"
        @click="locale = lang.locale"
      >
        {{ lang.label }}
      </button>
      <span v-if="langs.length - 1 !== index">|</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

let langs = [
  { label: 'English', locale: 'en' },
  { label: '繁體中文', locale: 'zhHant' },
  { label: '日文', locale: 'ja' }
]
</script>
