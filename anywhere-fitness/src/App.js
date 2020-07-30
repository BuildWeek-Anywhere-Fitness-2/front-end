import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Register from './components/Register/TrainerRegister.js'
import TrainerLogin from './components/Login/TrainerLogin'
import Dashboard from './components/Dashboard'
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
          <Route path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={TrainerLogin} />
          <PrivateRoute path="/trainerdashboard" component={Dashboard} />
          <PrivateRoute path="/addclass" component={AddClass} />
          <PrivateRoute path="/classes" component={Classes} />
        </Switch>
      </ClassContext.Provider>
    </div>
  );
}

export default App;