import React, {Component} from 'react';
import Axios from 'axios';
import Login from "./Login";

class Books extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        Axios.get('/books').then(({data: {books}}) => this.setState({books: books}))
    }
    
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.books.map(book => (
                            <a href = {book.title} ><li>{book.title}</li></a>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Books;