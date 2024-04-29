<template>
  <AlertDialogRoot>
    <AlertDialogTrigger
      class="font-semibold text-sm hover:bg-pink inline-flex h-[35px] items-center justify-center rounded-[4px] bg-brown px-[15px] leading-none focus:outline-none transition-all duration-200">
      Logout
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <AlertDialogContent
        class="z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-brown text-white border-4 border-gray p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <AlertDialogTitle class="m-0 text-xl font-semibold">
          Are you sure?
        </AlertDialogTitle>
        <AlertDialogDescription class="mt-4 mb-5 text-md leading-normal">
          You will be logged out of your account.
        </AlertDialogDescription>
        <div class="flex justify-end gap-[25px]">
          <AlertDialogCancel
            class="hover:bg-pink hover:text-white bg-white text-brown inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            class="hover:bg-pink hover:text-white bg-white text-brown inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
            @click="onLogout">
            Yes, log me out
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>

<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'radix-vue'

import { signOut } from 'firebase/auth'

const auth = useFirebaseAuth()

const onLogout = async () => {
  const notification = push.promise('We are logging you out...')
  try {
    await signOut(auth!)
    notification.resolve('Successfully logged out!')
    await navigateTo('/', { replace: true })
  } catch (e) {
    console.error(e)
    notification.reject('Failed to log out, please try again later!')
  }

}
</script>