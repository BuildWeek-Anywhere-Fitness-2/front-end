import React, {useState, useEffect} from  'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import LoginformSchema from './LoginformSchema'
import * as yup from 'yup'
import Button from '../Button'


export default function TrainerLogin(props) {

       const initialFormValues = {
        name: '',
        username: '',
        email: '',
        password: '',
      }
      
      const initialFormErrors = {
        name: '',
        username: '',
        email: '',
        password: '', 
      }
      
      const initialTrainers = [];
      const initialDisabled = true;

      const [trainers, setTrainers] = useState(initialTrainers)
      const [formValues, setFormValues] = useState(initialFormValues)
      const [formErrors, setFormErrors] = useState(initialFormErrors)
      const [disabled, setDisabled ] = useState(initialDisabled)
      const history = useHistory();

      useEffect(() => {
        LoginformSchema.isValid(formValues).then(valid => {
          setDisabled(!valid)
        })
    
      }, [formValues])

    const onSubmit = evt => {
        console.log('it works')
        evt.preventDefault()
        submit()
    }

    const submit = () => {
        console.log('its working')
    }

    const inputChange = (name, value) => {
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

    const onInputChange = evt => {
        console.log(formValues)
        inputChange(evt.target.name, evt.target.value)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
            <h2>Sign In</h2>
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
            </div>
            <div className='form-group-inputs'>
                <label>Username:&nbsp;
                    <input
                        value={formValues.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Password:
                    <input
                        value={formValues.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>
            <Button disabled={disabled} type="submit" onClick={onSubmit}>LOGIN</Button>
        </form>
    )
}