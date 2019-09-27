import React from "react";
import { Link, withRouter } from "react-router-dom";
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="toggleBtn ">
                    <ul>
                        <li><Link to="/books/reading">Reading List</Link></li>
                        <li><Link to="/books/finished">Finished Books</Link></li>
                        <li><Link to="/books/discover">Discover</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);