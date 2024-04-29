<template>
  <section class="bg-brown text-white container max-w-8xl mx-auto my-12 md:rounded-bl-[10%] md:rounded-tr-[10%]">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">
          <Icon name="dashicons:car" size="36" /><span> Ready to sell your car?</span>
        </h2>

        <p class="mt-4 text-gray-300">
          Let's kickstart your selling journey with our comprehensive resources!
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        <LandingCarTipCard title="Buying Guides" icon="🔍">
          Unsure about pricing or which features to highlight? Our buying guides cover everything from sedans to SUVs,
          helping you position your car competitively in the market.
        </LandingCarTipCard>

        <LandingCarTipCard title="Maintenance Tips" icon="🔧">
          Keep your vehicle in top condition with our expert maintenance tips. From DIY fixes to routine upkeep, we've
          got you covered to ensure your car shines for potential buyers.
        </LandingCarTipCard>

        <LandingCarTipCard title="Car Reviews" icon="🌟">
          Wondering how your car stacks up against the competition? Dive into our detailed reviews to understand its
          performance, safety features, and overall appeal.
        </LandingCarTipCard>

        <LandingCarTipCard title="Comparison Tools" icon="💰">
          Not sure how your car compares to similar models? Use our comparison tools to highlight its strengths and set
          it apart from the crowd.
        </LandingCarTipCard>
      </div>

      <div class="mt-6 mx-4">
        <p class="italic tracking-widest text-gray text-sm">
          #With our community forums, industry news updates, and safety information, you'll have everything
          you need to
          kickstart your selling journey with confidence. List your car today and let's get you on the road to a
          successful sale! #SellWithConfidence #CarSellingTips #KickstartYourSale"
        </p>
      </div>

      <div class="mt-8 text-center">
        <NuxtButton :to="user ? '/profile' : '/sign-up'">Get Started Today!</NuxtButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { User } from 'firebase/auth/cordova';
defineProps<{
  user: User
}>()

</script>
