<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div>
      <h1>Post Name</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})
</script>
