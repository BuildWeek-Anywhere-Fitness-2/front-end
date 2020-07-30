import React from 'react'
import Button from '../Button'

export default function TrainerProfile() {
    return(
        <div>
            <h3>Profile Info</h3>
            <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvuBIjMOKEl7Xf0xukMyCWKJr8N60Yugl6KA&usqp=CAU'/>
            <p>Name</p>
            <p>Email</p>
            <Button>Edit Info</Button>
        </div>
    )
}