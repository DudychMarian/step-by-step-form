import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  fullName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 4,
    maxLength: 48,
  },
  role: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 6,
    maxLength: 48
  },
  email: {
    value: '',
    error: '',
    validate: 'email',
    required: true,
  },
  password: {
    value: '',
    error: '',
    required: true,
    validate: 'password',
    minLength: 9,
    maxLength: 48,
  },
  communication: {
    value: false,
    error: '',
    validate: 'checkbox',
    helperText: 'Received communication by email for other products created by the Tray.io team'
  },
  updates: {
    value: false,
    error: '',
    validate: 'checkbox',
    helperText: 'Receive updates about Tray.io product by email'
  },
}