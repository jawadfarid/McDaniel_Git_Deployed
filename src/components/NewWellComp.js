import React from "react";
import './components.css'
import Form from 'react-bootstrap/Form'
import { Button, Col} from 'react-bootstrap';



class NewWellComp extends React.Component {
    constructor() {
        super()

        this.state = {
            newUWIDInput: "",
            newWellNameInput:"",
            newLicenseNumberInput:null,
            newAreaInput:null,
            newFieldInput:null,
            newDrillDateInput:null,
            newStatusInput:null,
            newTotalDepthInput:null,
        }



    }


    addNewWellOnChange= (event) => {
        console.log(event.target.value)
        this.setState({                    
            [event.target.name]: event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
        })
    }

    submitNewWellOnClick =(event)=> {
        if (this.state.newUWIDInput === "" && this.state.newWellNameInput === "") {
            alert("Please enter Well UWID and Well Name")             
        } else if (this.state.newUWIDInput === "") {
            alert("Please enter a Well UWID")
        } else if (this.state.newWellNameInput === "") {
            alert("Please enter a Well Name")
        } else {
            event.preventDefault();
            const mythis = this;
            fetch('https://mcdan-coding-exercise.azurewebsites.net/api/v1/well/', {

                // Specify the method
                method: 'POST',

                // JSON
                headers: {
                    // 'Authorization': "Token a9cf1481bbb7448fb07908be2c1dbbee",
                    'Authorization': "Token "+ localStorage.getItem("user_token"),
                    'Content-Type': 'application/json'
                },

                // A JSON payload
                body: JSON.stringify({
                    
                    "UWID":this.state.newUWIDInput,
                    "WellName": this.state.newWellNameInput,
                    "LicenseNumber": this.state.newLicenseNumberInput,
                    "Area": this.state.newAreaInput,
                    "Field":this.state.newFieldInput,
                    "DrillDate": this.state.newDrillDateInput,
                    "Status": this.state.newStatusInput,
                    "TotalDepth": this.state.newTotalDepthInput
                    
                })
            }).then(function (response) { 
                return response.text();
            }).then(function (text) {

                console.log('POST response: ');

                // Should be 'OK' if everything was successful
                console.log(text);
                if (text === "true") {
                    mythis.props.registerSubmitOnClick()
                }
            });
        }

    }

    render() {
        console.log(this.props)
        return (
        <div>
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <img itemProp="logo" src="https://www.mcdan.com/images/McDaniel%20BW.png" alt="mcdan logo" className="navbar-brand" width="200" height="40"></img>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={this.props.cancelOnClick}>
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item" onClick={this.props.logOut}>
                                <a href="#" className="nav-link">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="innerDiv1">
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridUWID">
                          <Form.Label>UWID</Form.Label>
                          <Form.Control name= "newUWIDInput" className = "newWellInput" onChange={this.addNewWellOnChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridWellName">
                          <Form.Label>Well Name</Form.Label>
                          <Form.Control name="newWellNameInput" controlid = "wellNameInput" className = "newWellInput" onChange={this.addNewWellOnChange} />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridLicenseNumber">
                          <Form.Label >License Number</Form.Label>
                          <Form.Control name="newLicenseNumberInput" id = "licenseNumberInput" className = "newWellInput" onChange={this.addNewWellOnChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridArea">
                          <Form.Label >Area</Form.Label>
                          <Form.Control name = "newAreaInput" id = "areaInput" className = "newWellInput" onChange={this.addNewWellOnChange} />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridField">
                          <Form.Label >Field</Form.Label>
                          <Form.Control name="newFieldInput" id = "fieldInput" className = "newWellInput" onChange={this.addNewWellOnChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDrillDate">
                          <Form.Label >Drill Date</Form.Label>
                          <Form.Control type="date" name="newDrillDateInput" id = "drillDateInput" className = "newWellInput" onChange={this.addNewWellOnChange} />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridStatus">
                          <Form.Label >Status</Form.Label>
                          <Form.Control name = "newStatusInput" id = "statusInput" className = "newWellInput" onChange={this.addNewWellOnChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridTotalDepth">
                          <Form.Label >Total Depth</Form.Label>
                          <Form.Control type="number" name="newTotalDepthInput" id = "totalDepthInput" className = "newWellInput" onChange={this.addNewWellOnChange} />
                        </Form.Group>
                      </Form.Row>

                      
                      <Button variant="primary" type="submit" onClick={this.submitNewWellOnClick}>
                        Submit
                      </Button>
                      <Button variant="danger" onClick={this.props.cancelOnClick}>
                        Cancel
                      </Button>
                    </Form>
                </div>
            </div>
        </div>
        )    
    }
}

export default NewWellComp;