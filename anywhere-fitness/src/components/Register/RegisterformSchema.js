import * as yup from 'yup'

const RegisterformSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is Required"),
    username: yup
      .string()
      .required("Username is required"),
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  })
  
  export default RegisterformSchema