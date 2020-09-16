import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Navbar from './components/Layout'
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserCards from './components/UserCards';
import {PageHeader} from 'antd';





class App extends Component {
  render() {
    return (
      <Router>
      <PageHeader title="CRUD" subTitle="Universidad Industrial de Santander"></PageHeader>
      <div className="container">
      <br /><br />
      <Navbar />
      <Route path='/' exact component={UserList} />
      <Route path='/add' exact component={CreateUser} />
      <Route path='/edit/:id' exact component={EditUser} />
      <Route path='/cards' exact component={UserCards} />
      </div>
      </Router>
    )
  }
}


export default App;
