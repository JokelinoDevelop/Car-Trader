<template>
  <div>
    <NuxtLink :to="to"
      class="mt-8 inline-block rounded border border-pink bg-pink px-12 py-3 text-md font-medium text-slate-800 hover:bg-brown hover:text-lightPink focus:outline-none active:text-lightPink transition-all duration-300">
      <slot />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
}>()
</script>
