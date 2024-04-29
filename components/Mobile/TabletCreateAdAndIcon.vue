<template>
  <div class="lg:hidden flex items-center justify-center md:justify-between text-white mb-8">
    <div class="hidden md:block">
      <PostCreate />
    </div>

    <div class="space-x-2">
      <Icon name="mdi:car" size="28" class="text-lightPink" /> <span class="text-">
        <slot />
      </span>
    </div>

  </div>
</template>
