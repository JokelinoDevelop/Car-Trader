<template>
  <div class="min-h-screen flex flex-col items-center">
    <p class="text-4xl text-white text-center">
      {{ user?.displayName }}
    </p>
    <div class="max-w-[20rem]">
      <button type="button"
        class="block w-full rounded-lg bg-lightGreen hover:bg-brown border-4 border-white hover:text-white px-5 py-3 text-lg tracking-widest font-[500] text-black transition-all duration-300"
        @click="onLogout">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth'
const user = useCurrentUser()

const auth = useFirebaseAuth()

const onLogout = async () => {
  await signOut(auth!)
  await navigateTo('/', { replace: true })
}

</script>
