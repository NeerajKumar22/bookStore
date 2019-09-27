import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";
import NavBar from "./Navbar";
class AddBooks extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <div class="field">
            <div class="control">
              <div className="container">
                <input className="input is-medium is-info bookFormInput" type="text" placeholder="title" />
                <input className="input is-medium is-info bookFormInput" type="text" placeholder="language" />
                <input className="input is-medium is-info bookFormInput" type="text" placeholder="year of publish" />
                <input className="input is-medium is-info bookFormInput" type="text" placeholder="author" />
                <input className="input is-medium is-info bookFormInput" type="text" placeholder="publisher" />
                <input className="input is-medium is-info bookFormInput" type="text" placeholder="description" />
                <input className="dashboardBtnLogin button is-rounded is-info logoutBtn is-pulled-right" type="submit" placeholder="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddBooks;