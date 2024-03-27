<template>
  <footer class="bg-brown lg:grid lg:grid-cols-5">
    <div class="relative block h-32 lg:col-span-2 lg:h-full">
      <NuxtImg src="/images/car-footer.webp" alt="" class="absolute inset-0 h-full w-full object-cover z-[5]" />
      <div class="absolute w-full h-full z-[10] bg-lightPink opacity-20" />
    </div>

    <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span class="text-xl uppercase tracking-wide text-lightPink"> Call us </span>

            <a href="#" class="block text-2xl font-medium text-gray hover:opacity-75 sm:text-3xl">
              +38975999999
            </a>
          </p>

          <ul class="mt-8 space-y-1 text-sm font-[500] tracking-widest text-lightGreen italic">
            <li>Monday to Sunday</li>
            <li>24h Available</li>
          </ul>

          <ul class="mt-8 flex gap-6">
            <li>
              <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">Facebook</span>

                <Icon name="mdi:facebook" size="32" color="DDCAD9" />
              </a>
            </li>

            <li>
              <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">Instagram</span>

                <Icon name="mdi:instagram" size="32" color="DDCAD9" />
              </a>
            </li>

            <li>
              <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">Twitter</span>

                <Icon name="mdi:twitter" size="32" color="DDCAD9" />
              </a>
            </li>

            <li>
              <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">GitHub</span>

                <Icon name="mdi:github" size="32" color="DDCAD9" />
              </a>
            </li>

            <li>
              <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">Dribbble</span>

                <Icon name="mdi:dribbble" size="32" color="DDCAD9" />
              </a>
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p class="font-medium text-lightPink">
              Services
            </p>

            <ul class="mt-6 space-y-4 text-sm text-lightGreen">
              <li>
                <a href="#" class="transition hover:opacity-75"> Car Listings </a>
              </li>

              <li>
                <a href="#" class="transition hover:opacity-75"> Vehicle History Reports </a>
              </li>

              <li>
                <a href="#" class="transition hover:opacity-75"> Financing Assistance </a>
              </li>

              <li>
                <a href="#" class="transition hover:opacity-75"> Trade-In Options </a>
              </li>

              <li>
                <a href="#" class="transition hover:opacity-75"> Inspection Services </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-lightPink">
              Company
            </p>

            <ul class="mt-6 space-y-4 text-sm text-lightGreen">
              <li>
                <a href="#" class="transition hover:opacity-75"> About </a>
              </li>

              <li>
                <a href="#" class="transition hover:opacity-75"> Meet the Team </a>
              </li>

              <li>
                <a href="#" class="transition hover:opacity-75"> Accounts Review </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-lightPink pt-12">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul class="flex flex-wrap gap-4 text-sm text-lightGreen tracking-wider">
            <li>
              <a href="#" class="transition hover:opacity-75"> Terms & Conditions </a>
            </li>

            <li>
              <a href="#" class="transition hover:opacity-75"> Privacy Policy </a>
            </li>

            <li>
              <a href="#" class="transition hover:opacity-75"> Cookies </a>
            </li>
          </ul>

          <p class="mt-8 text-sm text-lightGreen sm:mt-0">
            &copy; 2024. Car Trader. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>
