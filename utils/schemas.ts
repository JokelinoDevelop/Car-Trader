import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})
export type LoginFormSchema = z.infer<typeof loginFormSchema>

export type LoginErrors = z.ZodFormattedError<LoginFormSchema>

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
    marketingAccept: z.boolean().refine((value) => value === true, {
      message: 'Please check the field',
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    // eslint-disable-next-line quotes
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  })

export type FormSchema = z.infer<typeof formSchema>

export type SignUpErrors = z.ZodFormattedError<FormSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

export type ForgotPasswordErrors = z.ZodFormattedError<ForgotPasswordSchema>
