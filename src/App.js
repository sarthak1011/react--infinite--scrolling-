import React from 'react';
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom'


import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
    < >
          <Router>

         <Route exact path='/' component={Login} />
        { <Route exact path='/home' component={Home} />}
          </Router>


    
    </>
  );
}

export default App;
