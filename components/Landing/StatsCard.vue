<template>
  <div
    class="flex flex-col rounded-lg bg-brown px-4 py-8 text-center border-4 border-lightGreen group hover:bg-lightGreen hover:border-brown transition-colors duration-500">
    <dt class="order-last text-lg font-medium text-gray tracking-wider mt-2 group-hover:text-black">
      {{ title }}
    </dt>

    <dd class="text-4xl font-extrabold text-lightGreen md:text-5xl group-hover:text-black">
      <slot />
    </dd>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
