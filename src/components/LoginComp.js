import React from "react";
import './components.css'
import Form from 'react-bootstrap/Form'
import { Button, ButtonToolbar} from 'react-bootstrap';






class LoginComp extends React.Component {
    constructor() {
        super()

         this.state = {
            username: "",
            password: "",
            login: null,
            user_token: null
        }



    }

    loginOnchange= (event) => {
        if (event.target.id === "loginUsernameInput") {
            this.setState({username: event.target.value})
        } else if (event.target.id === "loginPasswordInput") {
            this.setState({password: event.target.value})
        }
    }

    

    loginSubmitOnClick = (e) => {
        
        if (this.state.username === "" && this.state.password === "") {
            alert("Please enter your username and password")             
        } else if (this.state.username === "") {
            alert("Please enter a username")
        } else if (this.state.password === "") {
            alert("Please enter a password")
        } 

        else {
            e.preventDefault();
            const mythis = this;
            fetch('https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/authenticate', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                        "username": this.state.username,
                        "password": this.state.password
                })
            }).then(function (response) {
                return response.json();
            }).then(function (obj) {

                console.log('POST response: ');

                // Should be 'OK' if everything was successful
                console.log(obj);
                if (mythis.state.username === obj.userName) {
                                   
                    localStorage.setItem('user_token', obj.token);
                   
                    mythis.setState({
                        user_token: localStorage.getItem("user_token")
                    })
                    // console.log(mythis.state.user_token)
                    mythis.props.registerSubmitOnClick();
                } else {
                    alert("Invalid Username or Password")
                }
            });
        }
    }

    render() {
        console.log(this.props)
        return (
            
                    
        
        <div>       
        <div className="loginCardContainer">        
            <div className = "InnerDiv2">
                <Form>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" id = "loginUsernameInput" className = "username" onChange={this.loginOnchange} required/>
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"id = "loginPasswordInput" className = "pswd" onChange={this.loginOnchange} required />
                    </Form.Group>

                    <ButtonToolbar className = "loginButtonContainer">
                        <Button variant="primary" size="lg" id = "loginSubmit" onClick={this.loginSubmitOnClick}>
                          Log In
                        </Button>
                        <Button size="lg" variant="danger" onClick={this.props.loginCancelOnClick}>
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

export default LoginComp;