<template>
  <main>
    <div class="container mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <NuxtImg alt="" src="/images/car.jpg"
              class="absolute inset-0 h-full w-full object-cover rounded-tl-[15%] rounded-br-[15%]" />
          </div>
        </div>

        <div class="relative flex items-center bg-gray-100">
          <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />

          <div class="p-8 sm:p-16 lg:p-24">
            <h2 class="text-2xl font-bold sm:text-3xl text-lightPink">
              Sell Faster, Sell Smarter
            </h2>

            <p class="mt-4 text-gray-600 text-gray tracking-wider">
              Tap into our user-friendly interface to sell your car in no time.
            </p>

            <NuxtButton :to="user ? '/profile' : '/sign-up'">List Your Car</NuxtButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { User } from 'firebase/auth/cordova';
defineProps<{
  user: User
}>()
</script>
