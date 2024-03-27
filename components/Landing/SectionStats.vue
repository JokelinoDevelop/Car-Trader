<template>
  <section class="bg-slate-700 py-32 mb-32 relative">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl text-lightPink">
          Trusted By
          Thousands of Satisfied Sellers 🌟
        </h2>

        <p class="mt-4 text-lightGreen italic sm:text-xl">
          Join the ranks of our satisfied sellers who have successfully listed and sold their vehicles on our platform.
        </p>
      </div>

      <div class="mt-8 sm:mt-12 relative z-[10]">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <LandingStatsCard title="Total Sales">
            $1.2m
          </LandingStatsCard>

          <LandingStatsCard title="Official Ads">
            100
          </LandingStatsCard>

          <LandingStatsCard title="Registered Companies">
            12
          </LandingStatsCard>
        </dl>
      </div>
    </div>

    <div class="absolute top-0 right-0 md:right-16 -translate-y-[25%]">
      <NuxtImg src="/images/red-car.png" alt="red car" class="w-[300px] md:w-[400px]" />
    </div>

    <div class="absolute bottom-0 left-0 translate-y-1/4 md:left-16">
      <NuxtImg src="/images/silver-car.png" alt="red car" class="w-[300px] md:w-[400px]" />
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
