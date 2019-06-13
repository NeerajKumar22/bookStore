import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Books from './Books';
import Login from "./Login";
import {BrowserRouter, Route} from 'react-router-dom';

function Main(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/books" component={Books} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
