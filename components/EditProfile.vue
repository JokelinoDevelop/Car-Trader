<template>
  <DialogRoot v-model:open="open">
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
        <form class="mb-[15px]" @submit.prevent="onEditProfileSubmit">
          <fieldset :disabled="uploading">
            <FormField v-model="editProfileForm.firstName" label="First Name" placeholder="First Name"
              :errors="editProfileErrors?.firstName" class="w-full mt-2 text-black" :dark="true" />
            <FormField v-model="editProfileForm.lastName" label="Last Name" placeholder="Last Name"
              :errors="editProfileErrors?.lastName" class="w-full mt-2 text-black" :dark="true" />
            <FormField v-model="editProfileForm.phoneNumber" label="Phone Number" placeholder="Phone Number"
              :errors="editProfileErrors?.phoneNumber" class="w-full mt-2 text-black" type="tel" :dark="true" />
            <div class="mt-[25px] flex justify-end">
              <button
                class="hover:bg-pink hover:text-white bg-white text-brown inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
                type="submit">
                Save changes
              </button>
            </div>
          </fieldset>
        </form>
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
import { doc, updateDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
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

const { editProfileForm, onEditProfile, editProfileErrors } = useForm()

const open = ref(false)

const user = useCurrentUser()

const name = ref(user.value?.displayName ?? '')

const uploading = ref(false)

const db = useFirestore()

const onEditProfileSubmit = async () => {
  uploading.value = true
  const notification = push.promise('We are updating your profile...')
  try {
    if (!user.value) return

    if (onEditProfile() == false) {
      notification.reject('Failed to update your profile, please check form data and try again!')
      throw new Error('Failed to update user profile')
    }

    await updateProfile(user.value!, {
      displayName: name.value,
    })

    const usersRef = doc(db, 'users', user.value.uid)

    await updateDoc(usersRef, {
      firstName: editProfileForm.firstName,
      lastName: editProfileForm.lastName,
      phoneNumber: editProfileForm.phoneNumber,
      updatedAt: new Date().toISOString(),
    })


    open.value = false
    notification.resolve('Successfully updated profile!')
  } catch (e: any) {
    console.error('Failed to update user profile', e)
    notification.reject('Failed to update profile, please try again later!')
  } finally {
    uploading.value = false
  }
}

</script>
