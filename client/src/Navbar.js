import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

class Navbar extends React.Component {
  handleClick = () => {
    localStorage.clear();
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="navBar">
        <NavLink className="dashboardBtnLogin button is-rounded is-info logoutBtn" to="/books">
          Home
        </NavLink>
        <NavLink className="dashboardBtnLogin button is-rounded is-info logoutBtn" to="/addBooks">
          Add Books
        </NavLink>
        <button className="dashboardBtnLogin button is-rounded is-info logoutBtn" onClick={this.handleClick}>
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(Navbar);