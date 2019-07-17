import React from "react";
import './components.css'
import Form from 'react-bootstrap/Form'
import { Button, Col, Row } from 'react-bootstrap';




class UpdateWellComp extends React.Component {
    constructor() {
        super()

         this.state = {
            newUWIDInput: "",
            newWellNameInput:"",
            newLicenseNumberInput:"",
            newAreaInput:"",
            newFieldInput:"",
            newDrillDateInput:"",
            newStatusInput:"",
            newTotalDepthInput:"",
        }




    }

    updateWellOnChange= (event) => {
        console.log(event.target.value)
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({

            [name]: value                    

        });
    }
    

    



    submitUpdateWellOnClick =(event)=> {
        event.preventDefault();
        const mythis= this;
        const mynewUWID = this.refs.newUWIDInput.value
        const mynewWellName = this.refs.newWellNameInput.value
        const mynewLicenseNumber = this.refs.newLicenseNumberInput.value
        const mynewArea = this.refs.newAreaInput.value
        const mynewField = this.refs.newFieldInput.value
        const mynewDrillDate = this.refs.newDrillDateInput.value
        const mynewStatus = this.refs.newStatusInput.value
        const mynewTotalDepth = this.refs.newTotalDepthInput.value

        console.log(this.state)
        const id = this.props.updateInputWell.id
        fetch(`https://mcdan-coding-exercise.azurewebsites.net/api/v1/well/${id}`, {

            // Specify the method
            method: 'PUT',

            // JSON
            headers: {
                'Authorization': "Token "+ localStorage.getItem("user_token"),
                'Content-Type': 'application/json'
            },

            // A JSON payload
            body: JSON.stringify({
                
                "UWID":mynewUWID,
                "WellName": mynewWellName,
                "LicenseNumber": mynewLicenseNumber,
                "Area": mynewArea,
                "Field":mynewField,
                "DrillDate": mynewDrillDate,
                "Status": mynewStatus,
                "TotalDepth": mynewTotalDepth
                
            })
        }).then(function (response) { 
            return response.text();
        }).then(function (text) {

            console.log('POST response: ');

            // Should be 'OK' if everything was successful
            console.log(text);

            if (text === "true") {
                mythis.props.updateSubmitOnClick()
            }
        });

    }


    render() {
        console.log(this.props)
        return (
            <div className="UpdateWellComp">

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
                                <Form.Group as={Col} controlId="formGridUWID" >
                                  <Form.Label >UWID</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.uwid}  ref = "newUWIDInput" name= "uwidInput" className = "newWellInput" onChange={this.updateWellOnChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridWellName">
                                  <Form.Label>Well Name</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.wellName} ref = "newWellNameInput" name="newWellNameInput" id = "wellNameInput" className = "newWellInput" onChange={this.updateWellOnChange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridLicenseNumber">
                                  <Form.Label >License Number</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.licenseNumber} ref = "newLicenseNumberInput" name = "newLicenseNumberInput" id = "newLicenseNumberInput" className = "updateWellInput" onChange={this.updateWellOnChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridArea">
                                  <Form.Label >Area</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.area} ref = "newAreaInput" name = "newAreaInput" id = "areaInput" className = "newWellInput" onChange={this.updateWellOnChange}  />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridField">
                                  <Form.Label >Field</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.field} ref = "newFieldInput" name="newFieldInput" id = "fieldInput" className = "newWellInput" onChange={this.updateWellOnChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDrillDate">
                                  <Form.Label >Drill Date</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.drillDate} ref = "newDrillDateInput" type = "date" name="newDrillDateInput" id = "drillDateInput" className = "newWellInput" onChange={this.updateWellOnChange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridStatus">
                                  <Form.Label>Status</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.status} ref = "newStatusInput" name = "newStatusInput" id = "statusInput" className = "newWellInput" onChange={this.updateWellOnChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTotalDepth">
                                  <Form.Label >Total Depth</Form.Label>
                                  <Form.Control Value={this.props.updateInputWell.totalDepth} ref = "newTotalDepthInput" name="newTotalDepthInput" id = "totalDepthInput" className = "newWellInput" onChange={this.updateWellOnChange} />
                                </Form.Group>
                            </Form.Row>

                          
                              <Button variant="primary" type="submit" onClick={this.submitUpdateWellOnClick}>
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

export default UpdateWellComp;