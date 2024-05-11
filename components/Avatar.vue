<template>
  <AvatarRoot
    class="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <AvatarImage class="h-full w-full rounded-[inherit] object-cover" :src="photoURL ?? ''" alt="Seller Image" />
    <AvatarFallback
      class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
      :delay-ms="600">
      <slot></slot>
    </AvatarFallback>
  </AvatarRoot>
</template>

<script setup lang="ts">
defineProps<{
  photoURL?: string
}>()
</script>
