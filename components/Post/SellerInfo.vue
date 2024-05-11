<template>
  <div
    class="bg-slate-500 hover:bg-slate-400 border-2 border-lightGreen rounded-xl mx-auto mb-10 lg:my-10 p-4 w-full max-w-[350px] transition-all duration-300 cursor-pointer">
    <div class="flex items-center justify-between">
      <Avatar :photoURL="user.photoURL">
        {{ user.firstName[0] + user.lastName[0] }}
      </Avatar>

      <h2 class="text-white text-lg font-medium">{{ user.firstName }} {{ user.lastName }}</h2>
    </div>

    <ul>
      <li class="text-white mt-4 space-x-4">
        <Icon name="mdi:phone" size="32" /><span>{{ user.phoneNumber }}</span>
      </li>

      <li class="text-white mt-4 space-x-4">
        <Icon name="mdi:email" size="32" /><span>{{ user.email }}</span>
      </li>
    </ul>


  </div>
</template>

<script setup lang="ts">
import type { User } from '~/types';

defineProps<{
  user: User
}>()
</script>
