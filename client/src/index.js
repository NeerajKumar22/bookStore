import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import "./App.css";
import './index.css';
import App from './App';
import Books from './Books';
import BookDetails from './BookDetails';
import Login from "./Login";
import Register from "./Register";
import {BrowserRouter, Route} from 'react-router-dom';

function Main(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/books" component={Books} />
            <Route path="/books/:id" component={BookDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </BrowserRouter>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
