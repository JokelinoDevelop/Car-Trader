import {
  loginFormSchema,
  formSchema,
  forgotPasswordSchema,
  createAdFormSchema
} from '../utils/schemas'
import type {
  SignUpErrors,
  LoginErrors,
  ForgotPasswordErrors,
  CreateAdErrors
} from '../utils/schemas'
import { fromZodError } from 'zod-validation-error'

export const useForm = () => {
  const loginForm = reactive<LoginFormSchema>({
    email: '',
    password: ''
  })

  const loginErrors = ref<LoginErrors | null>(null)

  const onLogin = () => {
    const valid = loginFormSchema.safeParse(loginForm)
    if (!valid.success) {
      loginErrors.value = valid.error.format()
      const errorConsole = fromZodError(valid.error)
      console.error(errorConsole)
      return false
    } else {
      loginErrors.value = null
      return true
    }
  }

  const forgotPasswordForm = reactive<ForgotPasswordSchema>({
    email: ''
  })

  const forgotPasswordErrors = ref<ForgotPasswordErrors | null>(null)

  const onForgotPassword = () => {
    const valid = forgotPasswordSchema.safeParse(forgotPasswordForm)
    if (!valid.success) {
      forgotPasswordErrors.value = valid.error.format()
      const errorConsole = fromZodError(valid.error)
      console.error(errorConsole)
      return false
    } else {
      forgotPasswordErrors.value = null
      return true
    }
  }

  const form = reactive<FormSchema>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    marketingAccept: false
  })

  const signUpErrors = ref<SignUpErrors | null>(null)

  const onSubmit = () => {
    const valid = formSchema.safeParse(form)
    if (!valid.success) {
      signUpErrors.value = valid.error.format()
      const errorConsole = fromZodError(valid.error)
      console.error(errorConsole)
      return false
    } else {
      signUpErrors.value = null
      return true
    }
  }

  const createAdForm = reactive<CreateAdFormSchema>({
    postTitle: '',
    description: '',
    brand: '',
    model: '',
    engine: '',
    fuelType: '',
    transmission: '',
    numberOfDoors: null,
    year: null,
    price: null
  })

  const createAdErrors = ref<CreateAdErrors | null>(null)

  const onCreateAd = () => {
    const valid = createAdFormSchema.safeParse(createAdForm)
    if (!valid.success) {
      createAdErrors.value = valid.error.format()
      const errorConsole = fromZodError(valid.error)
      console.error(errorConsole)
      return false
    } else {
      createAdErrors.value = null
      return true
    }
  }

  return {
    signUpErrors,
    form,
    onSubmit,
    loginErrors,
    loginForm,
    onLogin,
    forgotPasswordErrors,
    forgotPasswordForm,
    onForgotPassword,
    createAdErrors,
    createAdForm,
    onCreateAd
  }
}
