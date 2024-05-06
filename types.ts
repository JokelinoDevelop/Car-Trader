import type { CreateAdFormSchema } from '~/utils/schemas'

type CreateAdFormSchemaPost = Omit<CreateAdFormSchema, 'coverImageIndex'>

export type Post = CreateAdFormSchemaPost & {
  id?: string
  createdAt?: string
  updatedAt?: string
  userId?: string
  coverImage?: string
}

export type User = {
  uid: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  marketingAccept: boolean
  photoURL: string
  createdAt: Date
  updatedAt: Date
}
