<template>
  <div class="w-full bg-brown border-lightPink border-b-4">
    <div
      class=" text-lightGreen container max-w-8xl mx-auto px-4 pt-4 pb-6 flex justify-between items-center text-primaryBrown">
      <NuxtLink to="/">
        <div class="flex items-center gap-4 text-xl cursor-pointer ">
          <NuxtImg src="/images/website-logo.svg" width="60" alt="car logo of the website" />
          <p class="text-xl md:text-3xl">
            Car <sub class="text-pink text-md md:text-xl font-[700] tracking-widest">Trader</sub>
          </p>
        </div>
      </NuxtLink>


      <div class="flex items-center gap-2 md:gap-6 text-md md:text-lg">
        <span class="hover-pink">All Cars</span>
        <span class="hover-pink">Sellers</span>
        <!-- <Icon name="mdi:account-outline" size="32" color="#DDCAD9" class="cursor-pointer" /> -->
        <DropDownMenu />
      </div>
    </div>
  </div>
</template>


<style scoped>
.hover-pink {
  @apply hover:text-lightPink transition-all duration-300
}
</style>
