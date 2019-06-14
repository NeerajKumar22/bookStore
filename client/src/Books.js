import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './index.css';
import "./App.css";

import Axios from 'axios';
import Login from "./Login";
import BookDetails from './BookDetails';

class Books extends Component {
  state = {
    books: [],
  }
  componentDidMount() {
    Axios.get('/books').then(({ data: { books } }) => this.setState({ books: books }))
  }

  render() {
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
                <li><Link to="">Reading List</Link></li>
                <li><Link to="">Finished Books</Link></li>
                <li><Link to="">Discover</Link></li>
              </ul>
            </div>

            <div className="welcomeTxt">
              <h2><b>Welcome to the discover page.</b></h2>
              <h2><b>Here, let me load a few books for you...</b></h2>
            </div>

          </div>

          <div>
            <ul>
              {
                this.state.books.map(book => {
                  return (
                  <li className="bookList">

                    <div>
                      <Link to={{
                        pathname: `/books/${book._id}`,
                        state: book
                      }}>
                        <div>
                          <div className="bookInfo">
                            <div>
                              <h2><b>{book.title}</b></h2>

                              <div className="bookYear">
                                <h4>{book.language}</h4>
                                <h4>{book.year}</h4>
                              </div>
                            </div>

                            <div>
                              <div>{book.author}</div>
                              <div>{book.publisher}</div>
                            </div>
                          </div>

                          <div>
                            <p>{book.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="btnSelector">
                      <span>a</span>
                      <span>b</span>
                      <span>c</span>
                    </div>

                  </li>);
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Books;