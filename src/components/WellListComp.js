import React from "react";
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './components.css';



class WellListComp extends React.Component {
   constructor() {
    super();
    this.state = {
      
    }
}

    componentDidMount() {
        this.props.getWellList()
    }

    wellUpdateOnClick= (e) => { 
    console.log("wellUpdateOnClick",e.target.id)
    // this.setState({
    //     view: "welllist"
    //   })
    }

    deleteOnClick=(e) => { 
        
        const myCurrentWell = this.props.wellListState.find(item=> Number(item.id) === Number(e.target.id))
        const myCurrentWellUWID = myCurrentWell.uwid
        const myCurrentWellName = myCurrentWell.wellName
        const id = Number(e.target.id)
        const mythis = this;

        fetch(`https://mcdan-coding-exercise.azurewebsites.net/api/v1/well/${id}`, {

            // Specify the method
            method: 'DELETE',

            // JSON
            headers: {
                // 'Authorization': "Token a9cf1481bbb7448fb07908be2c1dbbee",
                'Authorization': "Token "+ localStorage.getItem("user_token"),
                'Content-Type': 'application/json'
            },

            // A JSON payload
            body: JSON.stringify({
                
                "UWID":myCurrentWellUWID,
                "WellName": myCurrentWellName
                                                                
            })
        }).then(function (response) { 
            return response.text();
        }).then(function (text) {

            // console.log('POST response: ');

            // Should be 'OK' if everything was successful
            console.log(text);
            if (text === "true") {
                mythis.props.getWellList()
            }
        });

    }


    render() {
    // console.log(this.props)
    
        const wellList = this.props.wellListState.map((item,i) => {
        return  <tr key = {i}>
                    <td>{item.uwid}</td>
                    <td>{item.wellName}</td>
                    <td>{item.licenseNumber}</td>
                    <td>{item.area}</td>
                    <td>{item.field}</td>
                    <td>{item.totalDepth}</td>
                    <td>{item.drillDate}</td>
                    <td>{item.status}</td>
                    <td> 
                        <Button variant="primary" id = {item.id} onClick={this.props.updateWellOnClick} >Update</Button>
                        <Button variant="danger" id = {item.id} onClick={this.deleteOnClick}>Delete</Button>
                    </td>
                </tr>
                  
        });
        
        return (
            <div className="App">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <img itemProp="logo" src="https://www.mcdan.com/images/McDaniel%20BW.png" alt="mcdan logo" className="navbar-brand" width="200" height="40"></img>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={this.props.getWellList}>
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item" onClick={this.props.addWellOnClick}>
                                <a href="#" className="nav-link">Add Well</a>
                            </li>
                            <li className="nav-item" onClick={this.props.logOut}>
                                <a href="#" className="nav-link">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            <div>
                <Table className = "table table-bordered table-hover" >
                  <thead>
                      <tr>
                          <th>Unique Identifier</th>
                          <th>Well Name</th>
                          <th>License Number</th>
                          <th>Area</th>
                          <th>Field</th>
                          <th>Total Depth</th>
                          <th>Drilling Date</th>
                          <th>Status</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {wellList}          
                  </tbody>
               </Table>
              </div>
            </div>
    );
  }
}

export default WellListComp;