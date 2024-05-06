<template>
  <DropdownMenuRoot v-model:open="toggleState" class="group">
    <DropdownMenuTrigger
      class="md:hidden rounded-full w-[40px] h-[40px] inline-flex items-center justify-center hover:text-pink hover:bg-lightGreen bg-slate-700 shadow-[0_2px_10px] shadow-slate-500 outline-none transition-colors duration-300"
      :class="{ 'bg-white text-black': toggleState }" aria-label="Customise options">
      <Icon name="mdi:menu" size="28" class="cursor-pointer" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class=" min-w-[220px] z-[15] outline-none bg-pink text-lightGreen text-md flex flex-col gap-2 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        :side-offset="5">
        <NuxtLink to="/vehicles">
          <DropdownMenuItem value="Vehicles"
            class="bg-transparent hover:bg-white hover:text-black leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none transition-all duration-300">
            Vehicles
            <div class="ml-auto pl-[20px]">
              <Icon name="mdi:car" size="24" />
            </div>
          </DropdownMenuItem>
        </NuxtLink>

        <NuxtLink to="/sellers">
          <DropdownMenuItem value="Sellers"
            class="bg-transparent hover:bg-white hover:text-black leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none transition-all duration-300">
            Sellers
            <div class="ml-auto pl-[20px]">
              <Icon name="material-symbols:man-3-rounded" size="24" />
            </div>
          </DropdownMenuItem>
        </NuxtLink>

        <DropdownMenuArrow class="fill-gray w-[1rem] h-[1rem]" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

const toggleState = ref<boolean>(false)
</script>
