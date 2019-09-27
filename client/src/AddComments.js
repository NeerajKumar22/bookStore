import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

class AddComments extends Component {
  render() {
    return (
      <div className="container">
        <textArea className="textarea" type="text" placeholder="Add your comment about book" />
        <input className="dashboardBtnLogin button is-rounded is-info logoutBtn is-pulled-right" type="submit" placeholder="Submit"/>
      </div>
    )
  }
}

export default AddComments;