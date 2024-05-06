<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div class="grid gap-6 mt-6 pb-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 lg:mt-12 lg:pb-12">
      <template v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import { collection, query } from 'firebase/firestore'

const db = useFirestore()

const q = query(collection(db, 'posts'))

const { data: posts } = useCollection<Post>(q, { ssrKey: useId() })
</script>
