import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import './index.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Books from "./Books";
import setAuthToken from "./utils/setAuthToken";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: [],
            password: [],
            auth: false
        }
    }
    componentDidMount() {
        if (localStorage["token-books"]) {
            axios.post("/users/register", { email: this.state.email, password: this.state.password }).then(({ data }) => {
                this.setState({ auth: true });
            })
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        axios.post("/users/register", { email: this.state.email, password: this.state.password }).then(({ data }) => {
            if (data.success) {
                setAuthToken(data.token);
                localStorage.setItem("token-books", data.token);
                this.props.history.push("/books");
            } else {
                setAuthToken();
            }
        });

        axios.get("/books").then(res => console.log(res))
    }
    render() {
        var { email, password } = this.state;
        return (
            <div className="container">
                <button>X</button>
                <h1>WELCOME TO THE BOOK STORE</h1>
                <div>
                    <h3>If don't have an anccount</h3>
                    <h3>Please Register Here</h3>
                    <input type="text" className="input" value={email} placeholder="email" name="email" onChange={this.handleChange} />
                    <input type="password" className="input" value={password} palaceholder="password" name="password" onChange={this.handleChange} />
                    <button className="button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Register;