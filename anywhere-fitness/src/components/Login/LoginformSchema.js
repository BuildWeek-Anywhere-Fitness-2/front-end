import * as yup from 'yup'

const LoginformSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required"),
    password: yup
      .string()
      .required("Password is required")
  })
  
  export default LoginformSchema