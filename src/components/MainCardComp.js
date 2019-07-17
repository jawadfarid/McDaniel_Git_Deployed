import React from "react";
import { Button } from 'react-bootstrap';
import './components.css'




class MainCardComp extends React.Component {
    constructor() {
        super()

         this.state = {
            
        }

    }


    render() {
        return (
            <div className='mainCardContainer'>
                <div className="innerDiv">   
                    <Button  variant="primary" id = "login" onClick={this.props.loginOnClick}> Login </Button><br/><br/>
                    <Button variant="primary" id = "guest" onClick={this.props.guestOnClick}> Continue as Guest </Button><br/><br/>
                    <Button variant="primary" id = "signup" onClick={this.props.signupOnClick}> Sign Up! </Button><br/><br/>
                </div>
            </div>
        )    
    }
}

export default MainCardComp