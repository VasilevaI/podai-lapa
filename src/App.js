import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Add from './pages/Add';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';

import { Provider } from 'react-redux';
import store from './redux/store/index.js';

function App() {
  return (
    <Provider store={store}>
    <Router>
        <Navbar/>
      <div>
       
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/adopt">
            <Adopt />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
