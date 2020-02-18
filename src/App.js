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
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';

function App() {
  return (
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
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
