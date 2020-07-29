import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from './Button'

function Home() {
    const history = useHistory()
    return (
        <div className='homepage-buttons'>
            <h3>Create an account</h3>
            <Button onClick={() => history.push('/register')}>Register</Button>
            <h3>Already have an account?</h3>
            <Button onClick={() => history.push('/login')}>Sign In</Button>
        </div>
    )
}

export default Home;