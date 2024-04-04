<template>
  <NuxtLink to="/post-info"
    class="block rounded-lg p-4 bg-brown hover:bg-brown/80 border-2 border-lightPink text-white transition-all duration-300">
    <NuxtImg alt="Car image" src="/images/car.jpg"
      class="h-[20rem] w-full rounded-md object-cover border-2 border-lightPink" />

    <div class="mt-4">
      <dl>
        <div>
          <dt class="sr-only">
            Price
          </dt>

          <dd class="text-2xl text-gray-500">
            $240,000
          </dd>
        </div>

        <div>
          <dt class="sr-only">
            Car Name
          </dt>

          <dd class="font-medium text-xl text-lightGreen tracking-widest">
            Fiat Grande Punto
          </dd>
        </div>
      </dl>

      <div class="mt-6 flex flex-col items-center text-md">
        <div class="flex justify-around w-full">
          <PostCardInfo icon="mdi:calendar" title="Year" value="2020" />
          <PostCardInfo icon="mdi:engine" title="Engine" value="2.0l" />
          <PostCardInfo icon="mdi:car-hatchback" title="Brand" value="Fiat" />
        </div>

        <div class="flex justify-around w-full">
          <PostCardInfo icon="mdi:fuel" title="Fuel" value="Petrol" />
          <PostCardInfo icon="material-symbols:auto-transmission-outline" title="Gearbox" value="Manual" />
          <PostCardInfo icon="mdi:car-door" title="Doors" value="5" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">

</script>
