import React from 'react';
import 'bulma/css/bulma.css';
import axios from 'axios';
import setAuthToken from './utils/setAuthToken';
import {Redirect} from 'react-router-dom'
import Books from './Books';

class App extends React.Component {
  state = {
    email: "neeraj@gmail.com",
    password: "123456",
    auth: false
  }
  componentDidMount() {
    if(localStorage['token-books']){
      axios.post('/users/login', {email: this.state.email, password: this.state.password}).then(({data}) => {
        this.setState({auth: true})
      })
    }
  }
  
  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }
  handleSubmit = () => {
    axios.post('/users/login', {email: this.state.email, password: this.state.password}).then(({data}) => {
      if(data.success){
        setAuthToken(data.token);
        localStorage.setItem('token-books', data.token);
        this.props.history.push('/books')
      } else {
        setAuthToken();
      }
    });
    axios.get('/books').then(res => console.log(res))
  }

  render(){
    const {email, password} = this.state;
    return (
      this.state.auth ? <Redirect to="/books" /> : 
      <div className="container">
        <input type="text" className="input" value={email} placeholder="email" name="email" onChange={this.handleChange} />
        <input type="password" className="input" value={password} placeholder="password" name ="password" onChange={this.handleChange} />
        <button className="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default App;
