<template>
  <div class="col-span-6">
    <label for="marketingAccept" class="flex gap-4">
      <input id="marketingAccept" v-model="modelValue" type="checkbox"
        class="w-10 h-10 text-pink bg-white border-pink border-4 rounded-md checked:border-white focus:ring-lightGreen transition-all duration-300">

      <span class="text-sm text-black">
        I want to receive emails about events, product updates and company announcements.
      </span>
    </label>
    <div v-if="errors?._errors">
      <p v-for=" error in errors?._errors " :key="error" class="text-sm text-red-500">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  errors?: any
}>()

const modelValue = defineModel<any>()
</script>
