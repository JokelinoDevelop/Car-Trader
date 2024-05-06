<template>
  <NuxtLink :to="`/vehicles/${post.id}`"
    class="block rounded-lg  bg-brown hover:bg-brown/80 border-2 border-lightPink text-white transition-all duration-300">
    <NuxtImg alt="Car image" :src="post.coverImage ?? '/images/car.jpg'"
      class="h-[20rem] w-full rounded-md object-cover border-2 border-lightPink" />

    <div class="mt-4 p-3 ">
      <dl>
        <div>
          <dt class="sr-only">
            Price
          </dt>

          <dd class="text-xl lg:text-2xl text-gray-500">
            ${{ post.price }}
          </dd>
        </div>

        <div>
          <dt class="sr-only">
            Car Name
          </dt>

          <dd class="text-lg font-medium lg:text-xl text-lightGreen tracking-widest">
            {{ post.postTitle }}
          </dd>
        </div>
      </dl>

      <div class="mt-6 flex flex-col items-center text-md">
        <div class="grid gap-1 grid-cols-3 w-full">
          <PostCardInfo icon="mdi:calendar" title="Year" :value="post.year" />
          <PostCardInfo icon="mdi:engine" title="Engine" :value="post.engine" />
          <PostCardInfo icon="mdi:car-hatchback" title="Brand" :value="post.brand" />
        </div>

        <div class="grid gap-1 grid-cols-3 w-full">
          <PostCardInfo icon="mdi:fuel" title="Fuel" :value="post.fuelType" />
          <PostCardInfo icon="material-symbols:auto-transmission-outline" title="Gearbox" :value="post.transmission" />
          <PostCardInfo icon="mdi:car-door" title="Doors" :value="post.numberOfDoors" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
defineProps<{
  post: Post
}>()
</script>
