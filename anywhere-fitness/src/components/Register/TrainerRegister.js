import React, {useState, useEffect} from  'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import RegisterformSchema from './RegisterformSchema'
import * as yup from 'yup'
import Button from '../Button'

export default function UserForm(props) {

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

      useEffect(() => {
        RegisterformSchema.isValid(formValues).then(valid => {
          setDisabled(!valid)
        })
    
      }, [formValues])

      const submit = () => {
        const newTrainer= {
          name: formValues.name.trim(),
          username: formValues.username.trim(),
          email: formValues.email.trim(),
          password: formValues.password.trim(),
        }
        postNewTrainer(newTrainer)
      }

      const postNewTrainer = newTrainer => {
        axios.post('https://anywherefitness-backend.herokuapp.com/api/auth/registertrainer', formValues)
        .then(res => {
          console.log(res)
          setTrainers([...trainers, res.data]);
          setFormValues(initialFormValues)
        })
        .catch(err => {
          console.log(err.dir);
        });
      }
    
      const inputChange = (name, value) => {
        yup
          .reach(RegisterformSchema, name)
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

    const onSubmit = evt => {
        console.log('it works')
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt => {
        console.log(formValues)
        inputChange(evt.target.name, evt.target.value)
    }

    return (
        <form className='form-container' submit={onSubmit}>
            <div className='form-group-submit'>
            <h2>General Info</h2>
                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                </div>
            </div>
            <div className='form-group-inputs'>
                <label>Name:&nbsp;
                    <input
                        value={formValues.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Username:&nbsp;
                    <input
                        value={formValues.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Email:
                    <input
                        value={formValues.email}
                        onChange={onInputChange}
                        name='email'
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
            <Button disabled={disabled} type="submit" onClick={onSubmit}>CREATE</Button>
        </form>
    )
}