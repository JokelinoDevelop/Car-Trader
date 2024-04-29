<template>
  <div class="mt-3">
    <div class="flex items-center justify-between">
      <div class="space-x-2 ">
        <button
          class="hover:bg-white hover:text-brown bg-pink text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-1.5 sm:px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
          type="button" @click="openFileDialog()">
          Choose file
        </button>
        <button
          class="hover:bg-black hover:text-white bg-white text-pink inline-flex h-[35px] items-center justify-center rounded-[4px] px-1.5 sm:px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
          type="button" :disabled="!files" @click="reset()">
          Reset
        </button>
      </div>


      <button
        class="hover:bg-white hover:text-brown bg-slate-700 text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-1.5 sm:px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
        type="button" @click="onSubmit">
        Confirm
      </button>
    </div>

    <template v-if="files?.length === 1">
      Selected file: {{ files.item(0)!.name }} (Click to select another)
      <NuxtImg v-if="img" :src="img" class="mx-auto w-[5rem] h-[5rem] mt-3" />
    </template>
    <template v-else>
      <p class="mt-2">Select one picture</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'
import { ref as storageRef } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'
import { updateDoc, type DocumentData, type DocumentReference } from 'firebase/firestore';

const { uid, userRef } = defineProps<{
  uid?: string,
  userRef: DocumentReference<DocumentData, DocumentData>
}>()

console.log(userRef)

const user = useCurrentUser()

const showProgressInfo = ref(false)

const storage = useFirebaseStorage()

const profilePictureFileRef = storageRef(storage, 'images/' + uid)

const {
  url,
  // gives you a percentage between 0 and 1 of the upload progress
  uploadProgress,
  uploadError,
  // firebase upload task
  uploadTask,
  upload,
} = useStorageFile(profilePictureFileRef)

const img = ref('')

const { files, open: openFileDialog, reset, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: false
})

onChange((files) => {
  if (files) {
    showProgressInfo.value = false
    img.value = URL.createObjectURL(files[0])
  }
})

const onSubmit = async () => {
  if (files.value && uid) {
    const notification = push.promise('We are updating your profile picture...')
    showProgressInfo.value = true
    await upload(files.value[0])

    if (!uploadError.value) {
      await updateProfile(user.value!, {
        photoURL: url.value
      })

      await updateDoc(userRef, {
        photoURL: url.value
      })
      notification.resolve('Success! Profile picture updated.')
      return
    }
    console.error(uploadError.value)
    notification.reject('Failed to update profile picture, please try again later!')
    showProgressInfo.value = false


  }
}
</script>
