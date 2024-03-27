<template>
  <div class="min-h-screen">
    <p class="text-4xl text-white text-center">
      {{user?.displayName}}
    </p>
  </div>
</template>

<script setup lang="ts">
const user = useCurrentUser()

</script>
