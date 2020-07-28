import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form'
import Trainer from './Trainer'
import formSchema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'
// import styled from 'styled-components'

//styling
// const StyledDetails = styled.div`
// background-color: ${pr => pr.alert ? 'red' : 'lightblue'};
// `

const initialFormValues = {
  name: '',
  username: '',
  email: '',
  passsword: '',
}

const initialFormErrors = {
  name: '',
  username: '',
  email: '',
  passsword: '', 
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
      .reach(formSchema, name)
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
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Form 
        values={formValues}
        inputChange={inputChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      <Trainer users={users}/>

    </div>
  )
}

export default App;
