import React from "react";
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

import NavBar from "./Navbar";
import Header from "./Header";

class Finished extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <div className="container">
                    <h1>Finished Book</h1>
                </div>
            </div>
        )
    }
}

export default Finished;