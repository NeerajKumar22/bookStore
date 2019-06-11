import React, {Component} from 'react';
import Axios from 'axios';

export default class Books extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        console.log('called')
        Axios.get('/books').then(({data: {books}}) => this.setState({books}))
    }
    
    render(){
        return (
            <ul>
                {
                    this.state.books.map(book => (
                        <li>{book.title}</li>
                    ))
                }
            </ul>
        )
    }
}