<template>
  <div class="min-h-screen max-w-[80%] mx-auto">
    <div class="grid grid-cols-3 gap-8 mt-12 pb-12">
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
