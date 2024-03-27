<template>
  <div class="mx-auto bg-pink px-4 py-44 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
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

const loading = ref(false)

const onLoginFormSubmit = async () => {
  loading.value = true
  try {
    const success = onForgotPassword()

    if (!success) {
      throw new Error('Failed to create user, incorrect form data')
    }

    await sendPasswordResetEmail(auth!, forgotPasswordForm.email, { url: 'http://localhost:3000' })
    return await navigateTo('/login', { replace: true })
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

</script>
