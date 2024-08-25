<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div class="flex gap-4 flex-col justify-center items-center">
      <Search v-model="search.searchQuery" class="flex-1" />

      <div class="grid grid-cols-6 gap-2 w-full max-w-[80%] md:max-w-[70%] lg:max-w-[40%]">
        <FormSelect v-model="search.fromYear" label="fromYear" placeholder="From Year" :dark="true" :options="years"
          class="w-full" />
        <FormSelect v-model="search.toYear" label="toYear" placeholder="To Year" :dark="true" :options="years"
          class="w-full" />
        <FormSelect v-model="search.numberOfDoors" label="doors" placeholder="Doors" :dark="true"
          :options="numberOfDoors" class="w-full" />
        <FormSelect v-model="search.transmission" label="transmission" placeholder="Transmission" :dark="true"
          :options="transmissions" class="w-full" />
        <FormSelect v-model="search.fuelType" label="fuelType" placeholder="Fuel Type" :dark="true" :options="fuelTypes"
          class="sm:col-span-6" />

        <button button @click="searchPosts"
          class="col-span-4 text-pink hover:text-white hover:bg-pink bg-white border-2 border-pink hover:border-lightPink rounded-md px-3 py-1 font-semibold transition-all duration-300">Search</button>

        <button button @click="resetFilter"
          class="col-start-5 col-span-2  text-lightPink hover:text-white hover:bg-pink bg-brown border-2 border-pink hover:border-lightPink rounded-md px-3 py-1 font-semibold transition-all duration-300">Reset</button>
      </div>
    </div>

    <div class="grid gap-6 mt-6 pb-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 lg:mt-6 lg:pb-12">

      <template v-if="filteredPosts.length > 0" v-for="post in filteredPosts" :key="post.id">
        <Post :post="post" />
      </template>
      <template v-else>
        <div class="text-white text-xl">Loading...</div>
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import { collection, query, where, getDocs } from 'firebase/firestore'
import type { VueFirestoreQueryData } from 'vuefire'
import { years } from '~/utils/createAdOptions'

const fuelTypes = Object.values(FuelType)
const transmissions = Object.values(Transmission)
const numberOfDoors = Object.values(NumberOfDoors)

const search = reactive({
  searchQuery: '',
  fromYear: 0,
  toYear: 0,
  numberOfDoors: 0,
  transmission: '',
  fuelType: '',
})

const resetFilter = () => {
  search.searchQuery = ''
  search.fromYear = 0
  search.toYear = 0
  search.numberOfDoors = 0
  search.transmission = ''
  search.fuelType = ''
  searchPosts()
}

const db = useFirestore()


const { data: posts } = useCollection<Post>(collection(db, 'posts'), { ssrKey: useId() })

const searchPosts = async () => {
  const q = buildQuery()
  const querySnapshot = await getDocs(q)
  posts.value = querySnapshot.docs.map(doc => doc.data() as VueFirestoreQueryData<Post>) as []
}
const buildQuery = () => {
  let q = query(collection(db, 'posts'))

  if (search.searchQuery) {
    q = query(q, where('postTitle', '>=', search.searchQuery),
      where('postTitle', '<=', search.searchQuery + '\uf8ff'))
  }

  if (search.fromYear) {
    q = query(q, where('year', '>=', search.fromYear))
  }

  if (search.toYear) {
    q = query(q, where('year', '<=', search.toYear))
  }

  if (search.numberOfDoors) {
    q = query(q, where('numberOfDoors', '==', search.numberOfDoors))
  }

  if (search.transmission) {
    q = query(q, where('transmission', '==', search.transmission))
  }

  if (search.fuelType) {
    q = query(q, where('fuelType', '==', search.fuelType))
  }

  return q
}

const filteredPosts = computed(() => {
  return posts.value
})
</script>
