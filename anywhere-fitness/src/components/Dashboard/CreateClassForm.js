import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Button from '../Button'

export default function CreateClass(props) {
    const [newClass, setNewClass] = useState({})
    const [ myClass, setMyClass ] = useState({
        name: "",
        type: "",
        duration: "",
        intensity: "" 
    })
    const { session, addClass }  = useContext();

    useEffect(() =>{
        setNewClass(session);
        }, [])

    const handleSubmit = e => {
        addClass(myClass);
        console.log(session)
    }

    const handleChanges = e => {
        let name = e.target.name;
        setMyClass({ ...myClass, [name]: e.target.value })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="create-class">
                <h3>Create A Class</h3>
                <label>
                    Name
                    <input id='name' name='name' placeholder='Enter A Class Name'onChange={handleChanges}/>
                </label>
            </div>
        </form>
    )
}
