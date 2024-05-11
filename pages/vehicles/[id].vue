<template>
  <div class="min-h-screen lg:max-w-[80%] mx-auto">

    <button
      class="ml-6 lg:ml-0 bg-brown my-6 text-white px-4 py-3 text-xl rounded-md font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200 hover:bg-pink"
      @click="$router.back()">Go Back</button>

    <GalleryPop v-if="galleryPop" :photos="post?.photos" />
    <Gallery :photos=post?.photos />

    <div class="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-start lg:gap-4">
      <PostDetailedInfo :post="post!" class="lg:flex-1" />
      <PostSellerInfo :user="user!" class="lg:flex-1 " />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { doc } from 'firebase/firestore';
import type { Post, User } from '~/types';

const galleryPop = useGalleryPop()

const db = useFirestore()

const vehicleId = useRoute().params.id

const { data: post } = useDocument<Post>(doc(db, 'posts', vehicleId as string))

const { data: user } = useDocument<User>(doc(db, 'users', post.value?.userId as string))


</script>
