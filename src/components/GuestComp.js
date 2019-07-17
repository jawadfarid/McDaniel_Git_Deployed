import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './components.css';



class GuestComp extends React.Component {
   constructor() {
    super();
    
    this.state = {
      
    }
}

    componentDidMount() {
    this.props.getWellList()

    }

    

    render() {
    console.log(this.props)
    
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
                        <li className="nav-item" onClick={this.props.loginOnClick}>
                            <a href="#" className="nav-link">Log In</a>
                        </li>
                        <li className="nav-item" onClick={this.props.signupOnClick}>
                            <a href="#" className="nav-link">Sign Up</a>
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

export default GuestComp;