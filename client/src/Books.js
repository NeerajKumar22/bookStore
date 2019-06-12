import React, {Component} from 'react';
import Axios from 'axios';
import Login from "./Login";

class Books extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        console.log('called')
        Axios.get('/books').then(({data: {books}}) => this.setState({books}))
    }
    
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.books.map(book => (
                            <li>{book.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Books;