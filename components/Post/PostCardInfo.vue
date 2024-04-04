<template>
  <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    <Icon :name="icon" size="32" class="text-pink" />

    <div class="ml-2 mt-1.5 sm:mt-0">
      <p class="text-gray-500">
        {{ title }}:
      </p>

      <p class="font-medium underline">
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string,
  title: string,
  value: string
}>()
</script>
