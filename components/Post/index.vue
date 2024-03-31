<template>
  <NuxtLink to="/post-info"
    class="block rounded-lg p-4 bg-brown hover:bg-brown/80 border-2 border-lightPink text-white transition-all duration-300">
    <NuxtImg alt="Car image" src="/images/car.jpg"
      class="h-[21rem] w-full rounded-md object-cover border-2 border-lightPink" />

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

      <div class="mt-6 flex items-center gap-8 text-md">
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <Icon name="mdi:engine" size="32" class="text-pink" />

          <div class="ml-2 mt-1.5 sm:mt-0">
            <p class="text-gray-500">
              Engine
            </p>

            <p class="font-medium">
              2.0l
            </p>
          </div>
        </div>

        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <Icon name="mdi:fuel" size="32" class="text-pink" />

          <div class="ml-2 mt-1.5 sm:mt-0">
            <p class="text-gray-500">
              Fuel
            </p>

            <p class="font-medium ">
              Petrol
            </p>
          </div>
        </div>

        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <Icon name="mdi:car-door" size="32" class="text-pink" />

          <div class="ml-2 mt-1.5 sm:mt-0">
            <p class="text-gray-500">
              Doors
            </p>

            <p class="font-medium">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">

</script>
