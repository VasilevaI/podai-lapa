import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Animals from './pages/Animals';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import Header from './components/Header';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
  <>
      <Header/>
      <div className="container mt-5">
          {props.children}
      </div>
  </>
)

const routes = [
  {
      path: '/',
      exact: true,
      main: () => <Layout>
          <Home/>
      </Layout>
  },
  {
      path: '/adopt',
      exact: true,
      main: () => <Layout>
          <Animals/>
      </Layout>
  },
  {
    path: '/contacts',
    exact: true,
    main: () => <Layout>
        <Contacts/>
    </Layout>
},
{
    path: '/profile',
    exact: false,
    main: () => {
        return <Layout>
        <Profile/>
    </Layout>
    }
},


]

const getRoutes = () => {
  return routes.map((route, index) => {
      return <Route
          exact={route.exact} 
          key={index}
          path={route.path}>
          {route.main}
      </Route>
  })
}

function App() {
  return <Provider store={store}>
  <Router>
      <Switch>
          {getRoutes()}
      </Switch>
  </Router>
</Provider>
}

export default App;
