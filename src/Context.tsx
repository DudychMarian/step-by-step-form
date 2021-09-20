import React, { createContext, useState } from 'react'
import { initialValues } from './initialValues'

const isText = RegExp(/^[A-Z ]+$/i)
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const isNumber = RegExp(/^\d+$/)
const isPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,48}$/)

// Applied to all fields
const variant = 'standard'
const margin = 'normal'

export declare type ValidateTypes = 'text' | 'number' | 'email' | 'phone' | 'zip' | 'checkbox' | 'select' | 'password'
export declare type VariantTypes = 'outlined' | 'standard' | 'filled'
export declare type MarginTypes = 'dense' | 'normal' | 'none'

export declare type ValidationSchema = Record<
  string,
  {
    value?: any
    error?: string
    required?: boolean
    validate?: ValidateTypes
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>

type ContextProps = {
  activeStep: number
  formValues: ValidationSchema
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleNext: () => void
  handleBack: () => void
  variant: VariantTypes
  margin: MarginTypes
}

export const AppContext = createContext<ContextProps>({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  variant,
  margin
})

interface ProviderProps {
  children: React.ReactNode
}

export function StepsProvider({ children }: ProviderProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [formValues, setFormValues] = useState(initialValues)

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1)
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1)

  // Handle form change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { type, name, value } = event.target
    const { checked } = event.target as HTMLInputElement

    const fieldValue = type === 'checkbox' ? checked : value
    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: fieldValue
      }
    }))

    const fieldName = initialValues[name]
    if (!fieldName) return

    const { required, validate, minLength, maxLength, helperText } = fieldName

    let error = ''

    if (required && !fieldValue) error = 'This field is required'

    if (minLength && value && value.length < minLength) error = `Minimum ${minLength} characters is required.`

    if (maxLength && value && value.length > maxLength) error = 'Maximum length exceeded!'

    if (validate) {
      switch (validate) {
        case 'text':
          if (value && !isText.test(value)) error = helperText || 'This field accepts text only.'
          break

        case 'password':
          if (value && !isPassword.test(value)) error = helperText || 'Min 1 uppercase letter, 1 lowercase letter, 1 number. Minimum 9 characters'
          break

        case 'number':
          if (value && !isNumber.test(value)) error = helperText || 'This field accepts numbers only.'
          break

        case 'email':
          if (value && !isEmail.test(value)) error = helperText || 'Please enter a valid email address.'
          break

        case 'checkbox':
          if (!checked) error = helperText || 'Please provide a valid value.'
          break

        case 'select':
          if (!value) error = helperText || 'Please select a value.'
          break

        default:
          break
      }
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error
      }
    }))
  }

  return (
    <AppContext.Provider value={{ activeStep, formValues, handleChange, handleNext, handleBack, variant, margin }}>
      <div className='mui-step-form'>{children}</div>
    </AppContext.Provider>
  )
}