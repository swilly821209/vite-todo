<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(val) {
      return ['primary', 'warning'].includes(val)
    }
  }
})
</script>

<template>
  <button
    class="px-2 border-2 border-gray-800 font-bold hover:bg-gray-800"
    :class="{
      'bg-orange-50 hover:text-orange-50': variant === 'warning',
      'bg-blue-50 hover:text-blue-50': variant === 'primary',
    }"
  >
    <slot />
  </button>
</template>