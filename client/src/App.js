import React from 'react';
import 'bulma/css/bulma.css';
import "./App.css";
import './index.css';
import axios from 'axios';
import setAuthToken from './utils/setAuthToken';
import {Redirect} from 'react-router-dom'
import Dashboard from "./Dashboard";
import Books from './Books';
import Login from "./Login";


class App extends React.Component {

  render(){
    return (
      <div>
        <Dashboard />
      </div>
    
    );
  }
}
export default App;
