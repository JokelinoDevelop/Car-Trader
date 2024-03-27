<template>
  <div
    class="block rounded-tr-[15%] rounded-bl-[15%] border-2 bg-gray/20 border-pink group hover:bg-lightPink hover:border-white p-8 shadow-xl transition duration-300"
    href="#">
    <Icon :name="icon" size="28" />

    <h2 class="mt-4 text-2xl font-bold text-gray tracking-widest group-hover:text-black">
      {{ title }}
    </h2>

    <p class="mt-1 text-sm text-gray-300 text-lightGreen tracking-wider group-hover:text-black">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  icon: string
}>()


</script>
