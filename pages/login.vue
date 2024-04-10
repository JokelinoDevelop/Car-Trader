<template>
  <section class="bg-pink relative">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        class="relative hidden border-b-4 border-pink lg:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <NuxtImg alt="Mustang car for login page" src="/images/login-car.webp" format="webp"
          class="absolute inset-0 h-full w-full object-cover" />

        <div class="absolute w-full h-full bg-pink opacity-25" />
      </aside>

      <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div class="max-w-xl lg:max-w-3xl">
          <a class="block text-blue-600" href="#">
            <span class="sr-only">Home</span>
            <Icon name="mdi:car" size="82" color="white" />
          </a>

          <h1 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to Car Trader!
          </h1>

          <p class="mt-4 leading-relaxed text-white">
            Please enter your credentials to log in.
          </p>

          <div
            class="bg-lightPink border-2 border-white lg:w-[35rem] my-6 space-y-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <form @submit.prevent="onLoginFormSubmit">
              <fieldset :disabled="uploading" class="space-y-6">
                <p class="text-center text-xl tracking-wider text-white font-[500]">
                  Sign in to your account
                </p>
                <FormField v-model="loginForm.email" label="Email" placeholder="Email" class="col-span-6 sm:col-span-6"
                  type="email" :errors="loginErrors?.email" />
                <FormField v-model="loginForm.password" label="Password" placeholder="Password" type="password"
                  :errors="loginErrors?.password" />

                <NuxtLink to="/forgot-password">
                  <p class="mt-2 underline hover:text-blue-500 transition-all duration-300">
                    Forgot your password?
                  </p>
                </NuxtLink>

                <button type="submit"
                  class="block w-full rounded-lg bg-lightGreen hover:bg-brown border-4 border-white hover:text-white px-5 py-3 text-lg tracking-widest font-[500] text-black transition-all duration-300">
                  Sign in
                </button>
              </fieldset>
            </form>

            <Divider />
            <!-- <hr class="mt-6 border-2 border-brown rounded-2xl"> -->

            <div class="w-full flex justify-center mt-6">
              <ButtonGoogle @click="onGoogleFormSubmit">
                Sign in with Google
              </ButtonGoogle>
            </div>
            <p class="text-center text-md text-gray-700 tracking-widest">
              No account?
              <NuxtLink to="/sign-up" class="underline hover:text-blue-500 transition-all duration-300">
                Sign Up
              </NuxtLink>.
            </p>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { GoogleAuthProvider } from 'firebase/auth'

export const googleAuthProvider = new GoogleAuthProvider()
</script>

<script setup lang="ts">
import type { FirebaseError } from 'firebase-admin'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
const { loginErrors, loginForm, onLogin } = useForm()

definePageMeta({
  middleware: 'already-logged-in'
})

const auth = useFirebaseAuth()

const uploading = ref(false)

const onLoginFormSubmit = async () => {
  uploading.value = true
  const notification = push.promise('We are logging your account in...')
  try {
    const success = onLogin()

    if (!success) {
      throw new Error('Failed to create user, incorrect form data')
    }

    await signInWithEmailAndPassword(auth!, loginForm.email, loginForm.password)
    notification.resolve('Successfully logged in!')

    return await navigateTo('/profile', { replace: true })
  } catch (e: any) {
    const errorCode = (e as FirebaseError).code
    switch (errorCode) {
      case 'auth/invalid-email':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        notification.reject('Invalid email or password')
        break
      case 'auth/user-disabled':
        notification.reject('User disabled, please contact support')
        break
      case 'auth/too-many-requests':
        notification.reject('Too many requests, please try again later')
        break
      default:
        notification.reject(
          'Failed to log in, please check your credentials and try again'
        )
    }
  } finally {
    uploading.value = false
  }
}

const onGoogleFormSubmit = async () => {
  uploading.value = true
  const notification = push.promise('We are logging your account in...')
  try {
    await signInWithPopup(auth!, googleAuthProvider)

    notification.resolve('Successfully logged in!')

    return await navigateTo('/profile', { replace: true })
  } catch (e) {
    console.error(e)
    notification.reject(
      'Failed to log in, please check your credentials and try again'
    )
  } finally {
    uploading.value = false
  }
}
</script>
