import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from '../utils/Axios';
import { API_URL } from '../utils/config';

// This will be imported just once.... in Navbar JS

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", ReDirect: false }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChangeInForm = this.handleChangeInForm.bind(this);
    }
    handleChangeInForm(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    async handleSubmitForm(event) {
        event.preventDefault();
        try {
            const loginData = await Axios.post(API_URL + 'token/obtain/', {
                username: this.state.username,
                password: this.state.password,

            });
            console.log("Response ", loginData)
            Axios.defaults.headers['Authorization'] = 'JWT' + loginData.access;
            localStorage.setItem('access_token', loginData.data.access);
            localStorage.setItem('refresh_token', loginData.data.refresh);

            if (loginData.response === 200) {
                console.log("Login SuccessFul")
                this.props.history.push('/')
            } else {
                this.props.history.push('/login')
            }
        } catch (error) {

        }
    }
    // This will have a form with username, password & submit button

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.handleSubmitForm}>
                            <p className="h4 text-center mb-4">Sign in</p>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input name="username" id="defaultFormLoginEmailEx" className="form-control" type="text" value={this.state.username} onChange={this.handleChangeInForm} />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Your password
                             </label>
                            <input name="password" className="form-control" type="password" id="defaultFormLoginPasswordEx" value={this.state.password} onChange={this.handleChangeInForm} />
                            <div className="text-center mt-4">
                                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Login;

