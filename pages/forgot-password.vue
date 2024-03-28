<template>
  <div class="mx-auto bg-pink px-4 py-44 sm:px-6 lg:px-8 relative">
    <NuxtImg src="/images/audi-q3-car.png"
      class="absolute w-[15rem] left-[50%] -translate-x-[50%] bottom-0 lg:w-[25rem] lg:left-0 lg:translate-x-[0] xl:w-[30rem] xl:left-[3rem] xl:top-[50%] xl:-translate-y-[50%]"
      alt="audi q3" />
    <NuxtImg src="/images/mercedes-ml-car.webp"
      class="absolute w-[15rem] right-[50%] translate-x-[50%] top-0 lg:w-[25rem] lg:right-0 lg:translate-x-[0] xl:w-[30rem] xl:right-[3rem]  xl:top-[50%] xl:-translate-y-[50%]" />
    <div class="mx-auto max-w-lg relative">
      <h1 class="text-center text-3xl font-bold text-white sm:text-3xl">
        Forgot password
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-lg text-white">
        Let us help you sign in to your account
      </p>

      <form
        class="bg-lightPink border-2 border-white lg:w-[35rem] my-6 space-y-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        @submit.prevent="onLoginFormSubmit">
        <FormField v-model="forgotPasswordForm.email" label="Email" placeholder="Email" type="email"
          :errors="forgotPasswordErrors?.email" />


        <button type="submit"
          class="block w-full rounded-lg bg-lightGreen hover:bg-brown border-4 border-white hover:text-white px-5 py-3 text-lg tracking-widest font-[500] text-black transition-all duration-300">
          Send Instructions
        </button>

        <p class="text-center text-md text-gray-700 tracking-widest">
          No account?
          <NuxtLink to="/sign-up" class="underline hover:text-blue-500 transition-all duration-300">
            Sign Up
          </NuxtLink>.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendPasswordResetEmail } from 'firebase/auth'
const { forgotPasswordErrors, forgotPasswordForm, onForgotPassword } = useForm()

const auth = useFirebaseAuth()

const onLoginFormSubmit = async () => {
  const notification = push.promise('We are sending you instructions for resetting your password...')
  try {
    const success = onForgotPassword()

    if (!success) {
      throw new Error('Failed to create user, incorrect form data')
    }

    await sendPasswordResetEmail(auth!, forgotPasswordForm.email, { url: 'http://localhost:3000' })
    notification.resolve('Successfully sent instructions for resetting your password!')
    return await navigateTo('/login', { replace: true })
  } catch (e) {
    console.error(e)
    notification.reject('Failed to send instructions for resetting your password, please try again later!')
  }
}

</script>
