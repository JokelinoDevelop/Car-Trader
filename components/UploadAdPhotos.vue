<template>
  <div class="mt-3">
    <div class="flex items-center justify-between ">
      <div class="space-x-2 ">
        <button
          class="hover:bg-white hover:text-brown bg-pink text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
          type="button" @click="openFileDialog()">
          Choose file
        </button>
        <button
          class="hover:bg-black hover:text-white bg-white text-pink inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200"
          type="button" :disabled="!files" @click="onReset()">
          Reset
        </button>
      </div>
    </div>

    <div class="overflow-auto max-h-[9rem]">
      <p class="text-red-100 pt-2 text-sm mt-3">{{ imagesError }}</p>

      <div v-if="files?.length" class="flex flex-wrap items-center gap-3 mt-3 justify-center">
        <div v-for="(img, index) in images" :key="img">
          <div class="relative">
            <NuxtImg @click="setCoverImage(index)" v-if="img" :src="img"
              class="relative border-2 border-pink w-[7rem] h-[7rem] mt-3 cursor-pointer"
              :class="{ 'border-blue-300 border-4': coverImageIndex === index }" />
            <Icon name="material-symbols:delete-rounded"
              class="text-pink bg-lightGreen hover:text-slate-800 transition-colors duration-200 border-2 rounded-full  absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 cursor-pointer"
              size="32" @click="removeImage(index)" />
          </div>
        </div>
      </div>
      <div v-else>
        <p class="mt-1 text-sm font-[400] leading-normal"> - If you want you can add pictures also</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const createAdFormPhotos = defineModel<any[]>('createAdFormPhotos')
const coverImageIndex = defineModel<any>('coverImageIndex')

const showProgressInfo = ref(false)

const images = ref<string[]>([])

const imagesError = ref('')

const onReset = () => {
  reset()
  coverImageIndex.value = -1
  createAdFormPhotos.value = []
  imagesError.value = ''
  images.value = []
}

function removeImage(index: number) {
  createAdFormPhotos.value!.splice(index, 1)
  images.value.splice(index, 1)
}
const { files, open: openFileDialog, reset, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: true,
})

function setCoverImage(index: number) {
  if (index == coverImageIndex.value) return
  coverImageIndex.value = index
}

onChange((files) => {
  if (!files) return

  const totalImages = images.value.length + files.length

  if (totalImages > 8) {
    imagesError.value = '- You can only upload up to 8 images'
    return
  }

  imagesError.value = ''
  showProgressInfo.value = false

  for (const file of files) {
    if (images.value.length >= 8) {
      imagesError.value = '- You can only upload up to 8 images'
      break
    }
    images.value.push(URL.createObjectURL(file))
    createAdFormPhotos.value!.push(file)
  }
})
</script>
