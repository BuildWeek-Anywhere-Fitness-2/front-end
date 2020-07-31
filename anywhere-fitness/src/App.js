import React, {useReducer} from 'react';
import {Switch, Route} from 'react-router-dom'
import 'App.css';
import Header from 'components/Header'
import Register from 'components/Register/TrainerRegister'
import TrainerLogin from 'components/Login/TrainerLogin'
import TrainerDashboard from 'components/Dashboard/TrainerDashboard'
import Home from 'components/Home'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import {Classes, AddClass} from 'components/Classes';
import { ClassesContext} from 'context';
import { classesReducer} from 'reducers';
import {useThunk} from 'hooks';


function App() {
  const [classes, dispatch] = useThunk(classesReducer, []);

  return (
    <div className="App">
      <ClassesContext.Provider value={{classes, dispatch}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={TrainerLogin} />
          <PrivateRoute path="/trainerdashboard" component={TrainerDashboard} />
          <PrivateRoute path="/addclass" component={AddClass} />
          <PrivateRoute path="/classes" component={Classes} />
        </Switch>
      </ClassesContext.Provider>
    </div>
  );
}

export default App;