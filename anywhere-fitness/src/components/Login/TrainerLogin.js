import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axios } from '../../utils/axiosWithAuth';
import LoginformSchema from './LoginformSchema'
import * as yup from 'yup'
import Button from '../Button'

const initialFormValues = {
  name: '',
  password: '',
}
const initialDisabled = true;

export default function TrainerLogin(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const history = useHistory();

  useEffect(() => {
    LoginformSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })

  }, [formValues])

  const onSubmit = evt => {
    evt.preventDefault();

    const data = {
      name: formValues.name.trim(),
      password: formValues.password.trim()
    }
    axios
      .post("/api/auth/trainerlogin", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/trainerdashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    yup
      .reach(LoginformSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-group-submit'>
        <h2>Sign In</h2>
        <div className='errors'>
          <div>{formErrors.name}</div>
          <div>{formErrors.password}</div>
        </div>
      </div>
      <div className='form-group-inputs'>
        <label>Username:&nbsp;
                    <input
            value={formValues.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>
        <label>Password:
                    <input
            value={formValues.password}
            onChange={onInputChange}
            name='password'
            type='password'
          />
        </label>
      </div>
      <Button disabled={disabled} type="submit">LOGIN</Button>
    </form>
  )
}