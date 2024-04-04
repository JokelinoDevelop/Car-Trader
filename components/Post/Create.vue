<template>
  <DialogRoot>
    <DialogTrigger
      class="font-semibold hover:bg-pink inline-flex h-[35px] items-center justify-center rounded-[4px] bg-brown px-[15px] leading-none focus:outline-none transition-all duration-200">
      Create Ad
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-brown text-white border-2 border-pink p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
        <DialogTitle class="m-0 text-xl font-semibold">
          Create Ad
        </DialogTitle>
        <DialogDescription class="mt-[10px] mb-5 text-md leading-normal">
          Enter the information about your ad here.
        </DialogDescription>
        <form @submit.prevent="onCreateAdFormSubmit">
          <fieldset class="mb-[15px] text-black grid grid-cols-6 gap-4">
            <FormField v-model="createAdForm.postTitle" label="postTitle" placeholder="Post Title"
              :errors="createAdErrors?.postTitle" :dark="true" class="sm:col-span-6" />
            <FormField v-model="createAdForm.brand" label="brand" placeholder="Brand" :errors="createAdErrors?.brand"
              :dark="true" />
            <FormField v-model="createAdForm.model" label="model" placeholder="Model" :errors="createAdErrors?.model"
              :dark="true" />
            <FormField v-model="createAdForm.engine" label="engine" placeholder="Engine"
              :errors="createAdErrors?.engine" :dark="true" />
            <FormField v-model.number="createAdForm.price" label="price" placeholder="Price" type="number"
              :errors="createAdErrors?.price" :dark="true" icon="mdi:dollar" />
            <FormSelect v-model="createAdForm.year" label="year" placeholder="Year" :errors="createAdErrors?.year"
              :dark="true" :options="years" />
            <FormSelect v-model="createAdForm.fuelType" label="fuelType" placeholder="Fuel Type"
              :errors="createAdErrors?.fuelType" :dark="true" :options="fuelTypes" />
            <FormSelect v-model="createAdForm.transmission" label="transmission" placeholder="Transmission"
              :errors="createAdErrors?.transmission" :dark="true" :options="transmissions" />
            <FormSelect v-model.number="createAdForm.numberOfDoors" label="numberOfDoors" placeholder="Doors"
              :errors="createAdErrors?.numberOfDoors" :dark="true" :options="numberOfDoors" />
            <FormTextarea v-model.number="createAdForm.description" label="description" placeholder="Description"
              :errors="createAdErrors?.description" :dark="true" />
          </fieldset>
          <div class="mt-[25px] flex justify-end">
            <button type="submit"
              class="hover:bg-pink hover:text-white bg-white text-brown inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-200">
              Post Ad
            </button>
          </div>
        </form>



        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close">
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { FuelType, Transmission, NumberOfDoors } from '~/utils/createAdOptions'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import type { FirebaseError } from 'firebase-admin'

const fuelTypes = Object.values(FuelType)
const transmissions = Object.values(Transmission)
const numberOfDoors = Object.values(NumberOfDoors)

const startYear = 1990
const currentYear = new Date().getFullYear()
const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => startYear + index
)


const { createAdForm, createAdErrors, onCreateAd } = useForm()

const onCreateAdFormSubmit = () => {
  const notification = push.promise('We are creating your ad...')
  try {

    if (onCreateAd() == false) {
      notification.reject('Failed to create ad, please check form data and try again!')
      return
    }
    console.log(createAdForm)

    notification.resolve('Successfully created ad!')
  } catch (e: any) {
    const errorCode = (e as FirebaseError).code
    console.error(errorCode)
    notification.reject('Failed to create ad, please try again later!')
  }
}
</script>