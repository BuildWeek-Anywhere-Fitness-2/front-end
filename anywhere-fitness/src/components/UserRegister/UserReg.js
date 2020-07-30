import React from  'react'
import Button from '../Button'

export default function User(props) {
    const {
        values,
        submit,
        inputChange,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        console.log('it works')
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt => {
        console.log(values)
        inputChange(evt.target.name, evt.target.value)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
            <h4>General Info</h4>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            <div className='form-group-inputs'>
                <label>Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Email:
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password:
                    <input
                        value={values.password}
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