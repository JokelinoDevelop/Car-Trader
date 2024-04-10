import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
})
export type LoginFormSchema = z.infer<typeof loginFormSchema>

export type LoginErrors = z.ZodFormattedError<LoginFormSchema>

const phoneRegex = /^07[0-9]{7}$/

export const formSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: 'Needs to be at least 3 characters' })
      .max(50),
    lastName: z
      .string()
      .min(3, { message: 'Needs to be at least 3 characters' })
      .max(50),
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: 'Needs to be at least 5 characters' }),
    passwordConfirmation: z
      .string()
      .min(5, { message: 'Needs to be at least 5 characters' }),
    phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
      message:
        'Invalid phone number format. Phone number must start with 07 followed by 7 digits without spaces.'
    }),
    marketingAccept: z.boolean().refine((value) => value === true, {
      message: 'Please check the field'
    })
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    // eslint-disable-next-line quotes
    message: "Passwords don't match",
    path: ['passwordConfirmation']
  })

export type FormSchema = z.infer<typeof formSchema>

export type SignUpErrors = z.ZodFormattedError<FormSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email()
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

export type ForgotPasswordErrors = z.ZodFormattedError<ForgotPasswordSchema>

export const createAdFormSchema = z.object({
  postTitle: z
    .string()
    .min(3, { message: 'Needs to be at least 3 characters' })
    .max(50),
  description: z
    .string()
    .min(10, { message: 'Needs to be at least 10 characters' })
    .max(200),
  brand: z
    .string()
    .min(3, { message: 'Needs to be at least 3 characters' })
    .max(20),
  model: z
    .string()
    .min(3, { message: 'Needs to be at least 3 characters' })
    .max(20),
  engine: z
    .string()
    .min(3, { message: 'Needs to be at least 3 characters' })
    .max(20),
  transmission: z.string().min(1, { message: 'Transmission is required' }),
  fuelType: z.string().min(1, { message: 'Fuel type is required' }),
  numberOfDoors: z
    .number()
    .min(1, { message: 'Number of doors is required' })
    .nullable(),
  year: z
    .number()
    .min(1990, { message: 'Year is required' })
    .max(new Date().getFullYear())
    .nullable(),
  price: z.number().min(1, { message: 'Price is required' }).nullable()
})

export type CreateAdFormSchema = z.infer<typeof createAdFormSchema>

export type CreateAdErrors = z.ZodFormattedError<CreateAdFormSchema>

export const editProfileFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Needs to be at least 3 characters' })
    .max(50),
  lastName: z
    .string()
    .min(3, { message: 'Needs to be at least 3 characters' })
    .max(50),
  phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
    message:
      'Invalid phone number format. Phone number must start with 07 followed by 7 digits without spaces.'
  })
})
export type EditProfileFormSchema = z.infer<typeof editProfileFormSchema>

export type EditProfileErrors = z.ZodFormattedError<EditProfileFormSchema>
