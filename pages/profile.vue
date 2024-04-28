<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div class="flex justify-between items-center mt-8 mb-8 text-white">
      <div class="flex items-center gap-8">
        <NuxtImg :src="userDoc?.photoURL ?? '/images/profile - image.webp'"
          class="w-[5rem] h-[5rem] rounded-xl border-2 border-brown" format="webp" alt="profile image" />
        <p class="text-4xl">
          {{ userDoc?.firstName + ' ' + userDoc?.lastName }}
        </p>

        <EditProfile />
        <LogoutProfile />
      </div>
      <div class=" flex items-center justify-center gap-4">
        <PostCreate />
        <Icon name="mdi:car" size="38" class="text-lightPink" /> <span class="text-2xl">Car Ads Posted: {{ posts?.length
          ?? '0' }}</span>
      </div>
    </div>

    <hr class="border-2 border-brown rounded-xl">

    <div class="grid grid-cols-3 gap-8 mt-12 pb-12">
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
