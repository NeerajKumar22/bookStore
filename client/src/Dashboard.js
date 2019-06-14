import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from "./assets/images/bookShelfMain.png";
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";
// import Login from "./Login";
// import Register from "./Register";


class Dashboard extends React.Component{
    render(){
        return(
            <div className = "container">
                <img className="mainImage" src={image} alt ="Main Image"></img>
                <h1 className= "mainHeading">
                    Your Bookshelf
                </h1>
                <div className = "dashboardBtn">
                    <Link className="" to = "/Login">Login</Link>
                    <Link to = "/Register">Register</Link>
                </div>
            </div>
        )
    }
}

export default Dashboard;