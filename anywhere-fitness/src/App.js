import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import UserReg from './components/UserRegister/UserReg'
import Header from './components/Header'
import Register from './components/Register/TrainerRegister.js'
import TrainerLogin from './components/Login/TrainerLogin'
import TrainerDashboard from './components/Dashboard/TrainerDashboard'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import {Classes, AddClass} from './components/Classes';
import { ClassContext} from './context/classContext';


function App() {

  return (
    <div className="App">
      <ClassContext.Provider value={{}}>
      <Header />
      <Switch>

        <Route path="/register">
          <Register />
          </Route>

          <Route path="/login">
            <TrainerLogin />
          </Route>

          <Route path='/trainerdashboard'>
            <TrainerDashboard />
          </Route>

          <Route path="/trainerhome">
            <Home />
          </Route>

        <PrivateRoute path='/addclass' component={AddClass}/>
        <PrivateRoute path="/classes" component={Classes} />

      </Switch>
      </ClassContext.Provider>
    </div>
  )
}

export default App;