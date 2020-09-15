import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Layout'
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';


const url = "https://localhost:5000/persona/";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <br /><br />
      <Navbar />
      <Route path='/' exact component={UserList} />
      <Route path='/add' exact component={CreateUser} />
      <Route path='/edit/:id' exact component={EditUser} />
      </div>
      </Router>
    )
  }
}


export default App;
