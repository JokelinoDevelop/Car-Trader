import type { CreateAdFormSchema } from '~/utils/schemas'

export type Post = CreateAdFormSchema & {
  id?: string
  createdAt?: string
  updatedAt?: string
  userId?: string
}

export type User = {
  uid: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  marketingAccept: boolean
  createdAt: Date
  updatedAt: Date
}
