import * as yup from 'yup'

export const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('This Field is required')
    .matches(/^[A-Za-z]+$/, 'Enter Valid Pet Name'),
  breed: yup
    .string()
    .required('This Field is required')
    .matches(/^[A-Za-z]+$/, 'Enter Valid Breed Name'),
})
