<template>
  <div class="min-h-screen bg-slate-700">
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>