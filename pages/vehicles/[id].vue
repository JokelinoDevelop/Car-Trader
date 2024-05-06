<template>
  <div class="min-h-screen lg:max-w-[80%] mx-auto">

    <button
      class="ml-6 lg:ml-0 bg-brown my-6 text-white px-4 py-3 text-xl rounded-md font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200 hover:bg-pink"
      @click="$router.go(-1)">Go Back</button>

    <GalleryPop v-if="galleryPop" :photos="post?.photos" />
    <Gallery :photos=post?.photos />

    <div class="my-10 text-white bg-brown p-4  md:rounded-xl">
      <div class="mb-4 flex justify-between items-center">
        <h1 class="text-lg md:text-xl lg:text-3xl font-medium tracking-wider">{{ post?.postTitle }}</h1>
        <p class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider">${{ post?.price }}.00</p>
      </div>

      <hr class="border-2 my-4 border-pink rounded-2xl">

      <div class="flex gap-4 justify-center md:justify-between items-center md:items-start flex-col md:flex-row">
        <ul class="text-lg bg-slate-700 py-4 px-8">
          <li class="flex gap-4 justify-between items-center">
            <span class="text-lightGreen font-medium">Brand: </span>{{ post?.brand }}
          </li>
          <li class="flex gap-4 justify-between items-center">
            <span class="text-lightGreen font-medium">Model: </span>{{ post?.model }}
          </li>
          <li class="flex gap-4 justify-between items-center">
            <span class="text-lightGreen font-medium">Year: </span>{{ post?.year }}
          </li>
          <li class="flex gap-4 justify-between items-center">
            <span class="text-lightGreen font-medium">Fuel Type: </span> {{ post?.fuelType }}
          </li>
          <li class="flex gap-4 justify-between items-center">
            <span class="text-lightGreen font-medium">Transmission: </span> {{ post?.transmission }}
          </li>
          <li class="flex gap-4 justify-between items-center">
            <span class="text-lightGreen font-medium">Engine: </span> {{ post?.engine }}
          </li>
        </ul>

        <div class="bg-slate-700 py-4 px-8">
          <h1 class="text-2xl text-lightGreen  font-medium text-center md:text-right">Description: </h1>
          <p class="mt-2 text-lg">{{ post?.description }}</p>
        </div>
      </div>


    </div>

  </div>
</template>

<script lang="ts" setup>
import { doc } from 'firebase/firestore';
import type { Post } from '~/types';

const galleryPop = useGalleryPop()

const db = useFirestore()

const vehicleId = useRoute().params.id

const { data: post } = useDocument<Post>(doc(db, 'posts', vehicleId as string))


</script>
