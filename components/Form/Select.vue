<template>
  <div class="col-span-6 sm:col-span-3">
    <label :for="label"
      class="relative block shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
      <select :id="label" v-model.trim="modelValue" :type="type ?? 'text'"
        class="peer bg-white w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        :placeholder="placeholder">
        <option label=" "></option>
        <template v-for="option in options" :key="option">
          <option :value="option">{{ option }}</option>
        </template>

      </select>
      <span
        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-pink px-2 py-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {{ placeholder }}
      </span>
      <div v-if="errors?._errors">
        <p v-for="error in errors?._errors" :key="error" class=" text-sm"
          :class="{ 'text-red-100 pt-2': dark, 'text-red-500': !dark }">
          - {{ error }}
        </p>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
const { errors, dark } = defineProps<{
  label: string,
  placeholder: string,
  options: string[] | number[],
  type?: string
  errors?: any,
  dark?: boolean
}>()

const modelValue = defineModel<any>()

</script>
