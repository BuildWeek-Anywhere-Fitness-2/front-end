import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import TrainerProfile from './TrainerProfile'
import CreateClass from './CreateClassForm'
import PreviousClasses from './PreviousClasses'
import FutureClasses from './FutureClasses'



export default function TrainerDashboard(props) {
 return(
        <div className="dashboard">
            <div className="profile-info">
                <TrainerProfile />
            </div>
            <div className="create-class"> 
                <CreateClass />
            </div>
            <div className="previous-class">
                <PreviousClasses />
            </div>
            <div className="future-class">
                <FutureClasses />
            </div>
        </div>
 )
}
