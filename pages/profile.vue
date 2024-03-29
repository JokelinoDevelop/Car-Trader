<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div class="flex justify-between items-center mt-8 mb-8 text-white">
      <div class="flex items-center gap-8">
        <NuxtImg src="/images/profile-image.webp" class="w-[5rem] rounded-xl border-2 border-brown" format="webp"
          alt="profile image" />
        <p class="text-4xl">
          {{ user?.displayName }}
        </p>

        <EditProfile />
        <button type="button"
          class="font-semibold hover:bg-pink inline-flex h-[35px] items-center justify-center rounded-[4px] bg-brown px-[15px] leading-none focus:outline-none transition-all duration-200"
          @click="onLogout">
          Logout
        </button>
      </div>
      <div class="text-2xl">
        <Icon name="mdi:car" size="38" /> <span>Car Ads Posted: 5</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import { signOut } from 'firebase/auth'
const user = useCurrentUser()

const auth = useFirebaseAuth()

const onLogout = async () => {
  await signOut(auth!)
  await navigateTo('/', { replace: true })
}

</script>
