<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div class="flex justify-center md:justify-start lg:justify-between items-center mt-8 mb-8 text-white">
      <div class="flex items-center gap-3 lg:gap-8">
        <NuxtImg :src="userDoc?.photoURL ?? '/images/profile - image.webp'"
          class="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] rounded-xl border-2 border-brown" format="webp"
          alt="profile image" />
        <p class="text-xl lg:text-xl">
          {{ userDoc?.firstName + ' ' + userDoc?.lastName }}
        </p>

        <div class="hidden md:flex md:gap-2">
          <EditProfile />
          <LogoutProfile />
        </div>

      </div>

      <div class="hidden lg:flex lg:items-center lg:justify-center lg:gap-2">
        <PostCreate />
        <Icon name="mdi:car" size="28" class="text-lightPink" /> <span class="text-md ">Car Ads Posted: {{
          posts?.length
          ?? '0' }}</span>
      </div>

    </div>

    <MobileThreeButtonMenu />

    <MobileTabletCreateAdAndIcon>
      <span>Car Ads Posted: {{
          posts?.length
          ?? '0' }}</span>
    </MobileTabletCreateAdAndIcon>


    <hr class="border-2 border-brown rounded-xl">

    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 pb-12">
      <template v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post, User } from '~/types'
import { collection, query, where, doc } from 'firebase/firestore'

definePageMeta({
  middleware: 'auth',
})

const user = useCurrentUser()

const db = useFirestore()

const q = query(collection(db, 'posts'), where('userId', '==', user.value?.uid))

const userRef = doc(collection(db, 'users'), user.value?.uid)

const { data: userDoc } = useDocument<User>(userRef)

const { data: posts } = useCollection<Post>(q, { ssrKey: useId() })

</script>
