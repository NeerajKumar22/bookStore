import React from 'react';
import Books from "./Books"
import Axios from 'axios';
import 'bulma/css/bulma.css';
import "./App.css";

class BookDetails extends React.Component {
    state = {
        books: []
    }

    render() {
        const { title, author, language, description, publisher, year } = this.props.location.state;
        return (
            <div>
                <nav className="navbar">
                    <h2>User Name</h2>
                    <button className="logoutBtn">Logout</button>
                </nav>

                <div className="container">
                    <div>
                        <div className="toggleBtn">
                            <ul>
                                <li><a>Reading List</a></li>
                                <li><a>Finished Books</a></li>
                                <li><a>Discover</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <div className="bookInfo">
                            <div>
                                <h2>{title}</h2>

                                <div className="bookYear">
                                    <h4>{language}</h4>
                                    <h4>{year}</h4>
                                </div>
                            </div>

                            <div>
                                <div>{author}</div>
                                <div>{publisher}</div>
                            </div>
                        </div>

                        <div>
                            <p>{description}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default BookDetails;