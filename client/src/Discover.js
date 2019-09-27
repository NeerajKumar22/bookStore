import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

import NavBar from "./Navbar";
import Header from "./Header";

class Discover extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <div className="container">
          <h1>Discover Books</h1>
        </div>
      </div>
    )
  }
}

export default Discover;