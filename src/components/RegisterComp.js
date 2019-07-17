import React from "react";
import './components.css'
import Form from 'react-bootstrap/Form'
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';




class RegisterComp extends React.Component {
    constructor() {
        super()

         this.state = {
            username: '',
            password: '',
            login: null,
            user_token: null
        }

    }

    registerOnchange= (event) => {
        if (event.target.id === "usernameInput") {
            this.setState({username: event.target.value})
        } else if (event.target.id === "passwordInput") {
            this.setState({password: event.target.value})
        }
           console.log(this.state)
    }

    


    mainSubmitOnClick = (e) => {
        
        const user_token = localStorage.getItem('token');
        const mythis = this;

        if (this.state.username === "" && this.state.password === "") {
            alert("Please enter a username and password")             
        } else if (this.state.username === "") {
            alert("Please enter a username")
        } else if (this.state.password === "") {
            alert("Please enter a password")
        } 

        else {

            fetch('https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/register', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                        "username": this.state.username,
                        "password": this.state.password
                })
            }).then(function (response) {
                return response.text();
            }).then(function (text) {

                console.log('POST response: ');

                // Should be 'OK' if everything was successful
                console.log(text);
                // console.log("second",state)
                if (text === "true") {
                    // console.log(this.state)
                    fetch(' https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/authenticate', {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({
                                "username": mythis.state.username,
                                "password": mythis.state.password
                        })
                    }).then(function (response) {
                        return response.json();
                    }).then(function (obj) {

                        console.log('POST response: ');

                        
                        localStorage.setItem('user_token', obj.token);
                       
                        mythis.setState({
                            user_token: localStorage.getItem("user_token")
                        })
                        mythis.props.registerSubmitOnClick();
                    })
                }
            });
        }
    }

    render() {
        console.log(this.props)
        return (
            


        <div>       
        <div className="registerCardContainer">        
            <div className = "InnerDiv2">
                <Form>
                <Form.Group controlId="GroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" id = "usernameInput" className = "username" onChange={this.registerOnchange} required/>
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id = "passwordInput" className = "pswd" onChange={this.registerOnchange} required />
                </Form.Group>

                <ButtonToolbar className = "registerButtonContainer">
                    <Button variant="primary" size="lg" id = "loginSubmit" onClick={this.mainSubmitOnClick}>
                      Register
                    </Button>
                    <Button variant="secondary" size="lg" variant="danger" onClick={this.props.loginCancelOnClick}>
                      Cancel
                    </Button>
                </ButtonToolbar>
                </Form>
            </div>
        </div>
        </div>
        )    
    }
}

export default RegisterComp;