<template>
  <div class="fixed inset-0 z-20 bg-lightPink opacity-70"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
    <div class="w-full flex justify-end">
      <Icon name="material-symbols:close-rounded" class="hover:cursor-pointer mt-8" @click="galleryPop = false"
        color="white" size="42" />
    </div>

    <div class="lg:w-[65rem] relative lg:flex lg:flex-col lg:justify-center lg:items-center h-[35rem] z-10">
      <NuxtImg :src="currentImage!" class="w-full max-h-full object-cover lg:rounded-xl" />

      <div class="absolute top-1/2 left-0 -translate-y-1/2 ml-6 bg-white px-3 py-2 rounded-full hover:cursor-pointer"
        @click="prevImage">
        <Icon name="mdi:chevron-left" size="20" />
      </div>
      <div class="absolute top-1/2 right-0 -translate-y-1/2 mr-6 bg-white px-3 py-2 rounded-full hover:cursor-pointer"
        @click="nextImage">
        <Icon name="mdi:chevron-right" size="20" />
      </div>
    </div>

    <div class="flex justify-center gap-5 mt-4 items-center">
      <div v-for="(photo, index) in photos" :key="photo"
        class="relative lg:w-[8rem] rounded-xl border-2 border-transparent hover:border-orange transition-all duration-500 overflow-hidden">
        <NuxtImg :src="photo" class="w-full h-[8rem] object-cover" alt="" />
        <div @mouseover="currentImage = photos![index]"
          class="absolute inset-0 bg-white opacity-0 hover:opacity-60 transition-opacity"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { photos } = defineProps<{
  photos?: string[]
}>()

const galleryPop = useGalleryPop()

const currentImage = ref<string | null>(photos ? photos[0] : null)

const prevImage = () => {
  const index = photos!.indexOf(currentImage.value!)
  if (index > 0) {
    currentImage.value = photos![index - 1]
    return
  }
  currentImage.value = photos![photos!.length - 1]
}

const nextImage = () => {
  const index = photos!.indexOf(currentImage.value!)
  if (index < photos!.length - 1) {
    currentImage.value = photos![index + 1]
    return
  }
  currentImage.value = photos![0]
}
</script>
