<template>
  <div class="mt-4 w-full max-w-[600px] relative">
    <input type="text" placeholder="Search..."
      class="w-full bg-brown text-white  placeholder:text-white px-2 py-3 border-2 border-pink focus:border-lightPink  rounded-md transition-all duration-300"
      v-model.trim="searchQuery">

    <Icon name="mdi:magnify" color="white" size="28" class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
  </div>

</template>

<script setup lang="ts">
const searchQuery = defineModel<string>()

</script>
