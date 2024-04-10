<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="border-b-4 border-l-4 border-lightPink relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
        <NuxtImg alt="blue car" format="webp" src="/images/sign-up-car.webp" preload
          class="absolute inset-0 h-full w-full object-cover opacity-100" />
        <div class="hidden lg:relative lg:block lg:p-12">
          <a class="block text-white" href="#">
            <span class="sr-only">Home</span>
            <Icon name="mdi:car" size="82" color="white" />
          </a>

          <h2 class="mt-6 text-2xl font-bold text-lightGreen tracking-wider sm:text-3xl md:text-4xl">
            Welcome to Car Trader
          </h2>

          <p class="mt-4 leading-relaxed text-gray font-[500]">
            At Car Trader, we provide top-notch solutions for car ads. Sell your
            vehicle quickly and effectively with our user-friendly platform and
            advanced tools.
          </p>
        </div>

        <div class="absolute w-full h-full bg-pink opacity-25" />
      </section>

      <main
        class="bg-lightPink flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <a class="inline-flex items-center border-4 border-lightPink justify-center rounded-full bg-brown size-20"
              href="#">
              <span class="sr-only">Home</span>
              <Icon name="mdi:car" size="52" color="#DDCAD9" />
            </a>

            <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Squid 🦑
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              At Car Trader, we provide top-notch solutions for car ads. Sell
              your vehicle quickly and effectively with our user-friendly
              platform and advanced tools.
            </p>
          </div>

          <form @submit.prevent="onFormSubmit">
            <fieldset :disabled="uploading" class="mt-8 grid grid-cols-6 gap-6 text-lg">
              <FormField v-model="form.firstName" label="First Name" placeholder="First Name"
                :errors="signUpErrors?.firstName" />
              <FormField v-model="form.lastName" label="Last Name" placeholder="Last Name"
                :errors="signUpErrors?.lastName" />
              <FormField v-model="form.phoneNumber" label="Phone Number" placeholder="Phone Number"
                :errors="signUpErrors?.phoneNumber" class="col-span-6 sm:col-span-6" type="tel" />
              <FormField v-model="form.email" label="Email" placeholder="Email" class="col-span-6 sm:col-span-6"
                type="email" :errors="signUpErrors?.email" />
              <FormField v-model="form.password" label="Password" placeholder="Password" type="password"
                :errors="signUpErrors?.password" />
              <FormField v-model="form.passwordConfirmation" label="Password Confirmation"
                placeholder="Password Confirmation" :errors="signUpErrors?.passwordConfirmation" type="password" />

              <FormCheckbox v-model="form.marketingAccept" :errors="signUpErrors?.marketingAccept" />

              <div class="col-span-6">
                <p class="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" class="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" class="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type="submit"
                  class="mt-8 inline-block rounded border border-pink bg-pink px-12 py-3 text-md font-medium text-slate-800 hover:bg-brown hover:text-lightPink focus:outline-none active:text-lightPink transition-all duration-300">
                  Create An Account
                </button>

                <p class="mt-4 text-sm text-black tracking-widest font-[500] sm:mt-0">
                  Already have an account?
                  <NuxtLink to="/login" class="text-gray-700 underline hover:text-blue-500 transition-all duration-300">
                    Log in
                  </NuxtLink>.
                </p>
              </div>
            </fieldset>
          </form>

          <!-- <hr class="mt-6 border-2 border-brown rounded-2xl"> -->
          <Divider class="mt-6" />

          <div class="w-full flex justify-center mt-6">
            <ButtonGoogle @click="onGoogleFormSubmit">
              Sign up with Google
            </ButtonGoogle>
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
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
const { form, signUpErrors, onSubmit } = useForm()

definePageMeta({
  middleware: 'already-logged-in'
})

const auth = useFirebaseAuth()

const db = useFirestore()

const uploading = ref(false)

const onFormSubmit = async () => {
  uploading.value = true
  const notification = push.promise('We are creating your account...')
  try {
    const success = onSubmit()

    if (!success) {
      throw new Error('Failed to create user, incorrect form data')
    }

    const { user } = await createUserWithEmailAndPassword(
      auth!,
      form.email,
      form.password
    )

    console.log(user)

    await updateProfile(user!, {
      displayName: `${form.firstName} ${form.lastName}`,
    })


    const usersRef = doc(db, 'users', user.uid)

    await setDoc(usersRef, {
      uid: user.uid,
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: form.email,
      marketingAccept: form.marketingAccept,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })

    notification.resolve('Successfully created account!')

    console.log(user)
    return await navigateTo('/profile')
  } catch (e: any) {
    const errorCode = (e as FirebaseError).code
    console.log(errorCode)
    switch (errorCode) {
      case 'auth/email-already-in-use':
        notification.reject('Email already in use. Please try again with a different email address.')
        break
      case 'auth/weak-password':
        notification.reject('Password is not strong enough. Add more characters including special characters and numbers.')
        break
      default:
        notification.reject('Failed to create account, please check your credentials and try again')
    }
  } finally {
    uploading.value = false
  }
}

const onGoogleFormSubmit = async () => {
  uploading.value = true
  const notification = push.promise('We are creating your account...')
  try {
    await signInWithPopup(auth!, googleAuthProvider)

    notification.resolve('Successfully created account!')

    return await navigateTo('/profile', { replace: true })
  } catch (e) {
    console.error(e)
    notification.reject(
      'Failed to create account, please check your credentials and try again'
    )
  } finally {
    uploading.value = false
  }
}
</script>
