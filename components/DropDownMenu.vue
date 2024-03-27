<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

const toggleState = ref<boolean>(false)

const user = useCurrentUser()
</script>

<template>
  <DropdownMenuRoot v-model:open="toggleState" class="group">
    <DropdownMenuTrigger
      class="rounded-full w-[45px] h-[45px] inline-flex items-center justify-center hover:text-black hover:bg-lightGreen bg-pink shadow-[0_2px_10px] shadow-slate-500 outline-none transition-colors duration-300"
      :class="{ 'bg-white text-black': toggleState }"
      aria-label="Customise options"
    >
      <Icon name="mdi:account-outline" size="32" class="cursor-pointer" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-[220px] outline-none bg-pink text-lightGreen text-md flex flex-col gap-2 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        :side-offset="5"
      >
        <NuxtLink to="/sign-up">
          <DropdownMenuItem
            value="Sign Up"
            class="bg-transparent hover:bg-lightGreen hover:text-black leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none transition-all duration-300"
          >
            Sign Up
            <div class="ml-auto pl-[20px]">
              <Icon name="mdi:tag-edit-outline" size="24" />
            </div>
          </DropdownMenuItem>
        </NuxtLink>

        <NuxtLink to="/login" v-if="!user">
          <hr class="text-lightGreen mb-2" />
          <DropdownMenuItem
            value="Log In"
            class="bg-transparent hover:bg-white hover:text-black leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none transition-all duration-300"
          >
            Log In
            <div class="ml-auto pl-[20px]">
              <Icon name="mdi:login" size="24" />
            </div>
          </DropdownMenuItem>
        </NuxtLink>

        <NuxtLink to="/profile">
          <hr class="text-lightGreen mb-2" />
          <DropdownMenuItem
            value="Profile"
            class="bg-transparent hover:bg-white hover:text-black leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none transition-all duration-300"
          >
            Profile
            <div class="ml-auto pl-[20px]">
              <Icon name="mdi:account" size="24" />
            </div>
          </DropdownMenuItem>
        </NuxtLink>

        <DropdownMenuArrow class="fill-gray w-[1rem] h-[1rem]" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
