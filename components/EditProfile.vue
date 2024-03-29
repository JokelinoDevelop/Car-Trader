<template>
  <DialogRoot>
    <DialogTrigger
      class="font-semibold hover:bg-pink inline-flex h-[35px] items-center justify-center rounded-[4px] bg-brown px-[15px] leading-none focus:outline-none transition-all duration-200">
      Edit profile
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-brown text-white border-2 border-pink p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
        <DialogTitle class="m-0 text-xl font-semibold">
          Edit profile
        </DialogTitle>
        <DialogDescription class="mt-[10px] mb-5 text-md leading-normal">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <FormField v-model="name" label="name" placeholder="name" class="w-full mt-2 text-black" />
        </fieldset>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="hover:bg-pink hover:text-white bg-white text-brown inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200">
              Save changes
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close">
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import { Icon } from '@iconify/vue'

const user = useCurrentUser()

const name = ref(user.value?.displayName ?? '')

</script>
