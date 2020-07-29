import React, {useEffect, useState} from 'react';
import './App.css';
import Register from './components/Register/Register'
import RegisterformSchema from './components/Register/RegisterformSchema'
import axios from 'axios'
import * as yup from 'yup'
// import styled from 'styled-components'


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

const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled ] = useState(initialDisabled)

  const getUsers = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([...users, res.data]);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.dir);
    });
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      console.log(res)
      setUsers([...users, res.data]);
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

  const submit = () => {
    const newUser= {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  },[])

  useEffect(() => {
    RegisterformSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trainers</h1>
      </header>

      <Register 
        values={formValues}
        inputChange={inputChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  )
}

export default App;