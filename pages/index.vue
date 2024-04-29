<template>
  <div>
    <LandingSectionCar :user="user!" />
    <LandingSectionTips :user="user!" />
    <LandingSectionStats />
  </div>
</template>

<script setup lang="ts">
const user = useCurrentUser()

</script>
