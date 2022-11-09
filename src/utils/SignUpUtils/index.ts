import * as yup from 'yup'

export const ValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .required('This Field is required.')
    .matches(/^[a-zA-Z]+$/, 'Enter Valid First Name.'),
  lastname: yup
    .string()
    .required('This Field is required.')
    .matches(/^[a-zA-Z]+$/, 'Enter Valid Last Name.'),
  username: yup
    .string()
    .required('This Field is required.')
    .matches(/^[a-zA-Z_]+$/, 'Enter Valid User Name.'),
  phone: yup
    .string()
    .required('This Field is required.')
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Enter Valid Mobile number.'),
  email: yup
    .string()
    .required('This Field is required.')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter Valid Email Address.'),
  password: yup
    .string()
    .required('This Field is required.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/^[A-Za-z0-9]+$/, 'Enter Valid Password.'),
})
