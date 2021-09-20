// import './App.css';

import React from 'react';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { Home } from './Components/Home';
// import store from './store';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import store  from './store'
import {persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <div style={{margin:"4rem auto"}}>

    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/add" component={AddUser}/>
      <Route exact path="/edit/:id" component={EditUser}/>
    </Switch>
    </Router>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
