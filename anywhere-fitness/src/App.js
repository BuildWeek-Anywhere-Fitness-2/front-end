import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import UserReg from './components/UserRegister/UserReg'
import Header from './components/Header'
import Register from './components/Register/TrainerRegister.js'
import TrainerLogin from './components/Login/TrainerLogin'
import TrainerDashboard from './components/Dashboard/TrainerDashboard'

import Home from './components/Home'
// import styled from 'styled-components'



function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register">
          <Register />
          </Route>
          <Route path="/login">
            <TrainerLogin />
          </Route>
          <Route path='/dashboard'>
            <TrainerDashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </div>
  )
}

export default App;