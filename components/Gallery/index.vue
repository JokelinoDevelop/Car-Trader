<template>
  <div
    class="lg:mt-10 w-full mx-auto lg:w-[60%] relative lg:flex lg:flex-col lg:justify-center lg:items-center h-[30rem] overflow-hidden z-10 lg:h-[28rem]">
    <NuxtImg @click.prevent="screenSize > 1024 ? galleryPop = true : galleryPop = false" :src="currentImage!"
      class="w-full h-full object-cover lg:rounded-lg lg:cursor-pointer" />

    <div class="absolute top-1/2 left-0 -translate-y-1/2 ml-6 bg-white px-3 py-2 rounded-full hover:cursor-pointer"
      @click="prevImage">
      <Icon name="mdi:chevron-left" size="20" />
    </div>
    <div class="absolute top-1/2 right-0 -translate-y-1/2 mr-6 bg-white px-3 py-2 rounded-full hover:cursor-pointer"
      @click="nextImage">
      <Icon name="mdi:chevron-right" size="20" />
    </div>
  </div>

  <div v-if="!galleryPop" class="flex justify-center gap-3 mt-4 items-center">
    <div v-for="(photo, index) in photos" :key="photo"
      class="relative lg:w-28 rounded-xl border-2 border-transparent hover:border-orange transition-all duration-500 overflow-hidden">
      <NuxtImg :src="photo" class="w-[6rem] md:w-[7rem] h-[7rem] object-cover" alt="" />
      <div @click.prevent="currentImage = photos![index]"
        class="absolute inset-0 bg-white opacity-0 hover:opacity-60 transition-opacity">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { photos } = defineProps<{
  photos?: string[]
}>()

const galleryPop = useGalleryPop()

console.log(galleryPop.value)


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

const screenSize = ref(0)

onMounted(() => {
  screenSize.value = window.innerWidth
  window.addEventListener('resize', () => {
    screenSize.value = window.innerWidth
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    screenSize.value = window.innerWidth
  })
})




</script>
