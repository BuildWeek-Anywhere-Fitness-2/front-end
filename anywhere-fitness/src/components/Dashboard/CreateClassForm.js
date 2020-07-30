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

    const handleChanges = e => {
        let name = e.target.name;
        setMyClass({ ...myClass, [name]: e.target.value })
    }
    return(
        <form >
            <div className="create-class">
                <h3>Create A Class</h3>
                <label>
                    Name
                    <input id='name' name='name' placeholder='Enter A Class Name' onChange={handleChanges}/>
                </label>
                <label>
                    Type
                    <input  id='type' name='type' placeholder='Enter A Class Type' onChange={handleChanges}/>
                </label>
                <label>
                    Duration
                    <select name='duration' onChange={handleChanges}>
                        <option value='select'>Select A Duration Time</option>
                        <option value='15'>15 Minutes</option>
                        <option value='30'>30 Minutes</option>
                        <option value='45'>45 Minutes</option>
                        <option value='hour'>1 Hour</option>
                    </select>
                </label>
                <label>
                    Intensity
                    <select name='intensity' onChange={handleChanges}>
                        <option value='select'>Select Intensity</option>
                        <option value='beg'>Beginner</option>
                        <option value='int'>Intermediate</option>
                        <option value='adv'>Advanced</option>
                    </select>
                </label>
            </div>
            <Button type="submit">Create Class</Button>
        </form>
    )
}
