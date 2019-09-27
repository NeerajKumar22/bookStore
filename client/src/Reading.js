import React from "react";
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

import NavBar from "./Navbar";
import Header from "./Header";

class Reading extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <div className="container">
                    <h1>Reading Book</h1>
                </div>
            </div>
        )
    }
}

export default Reading;