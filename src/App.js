import React, { Component } from 'react';
import MainCardComp from "./components/MainCardComp"
import WellListComp from "./components/WellListComp"
import RegisterComp from "./components/RegisterComp"
import LoginComp from "./components/LoginComp"
import NewWellComp from "./components/NewWellComp"
import UpdateWellComp from "./components/UpdateWellComp"
import GuestComp from "./components/GuestComp"
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component{
  constructor() {
    super();
    // const wellList = new WellList()
    this.state = {
      view:"main",
      wellListState : [],
      wellupdate:"" 
    }

    
}
  

  loginOnClick = () => { 
    // console.log("registerSubitOnClick",event)
    this.setState({
        view: "login"
      })
  }

  loginCancelOnClick= (e) => { 
    // console.log("cancelOnClick",e)
    this.setState({
        view: "main"
      })
  }
  registerSubmitOnClick = () => { 
    // console.log("registerSubitOnClick",event)
    this.setState({
        view: "welllist"
      })
  }

  updateCurrentWellInfoOnClick = (e) => {//this function is to grab current well object and show the info as default in the UpdateWellComp 
    this.getWellList()//fetching well list data for variable wellListState in state
    const myCurrentWell = this.state.wellListState.find(item=> item.id == e.target.id)
    this.setState({
        wellupdate: myCurrentWell
      },console.log("Current well"))
  }


  updateSubmitOnClick = (event) => { 
    console.log("updateSubmitOnClick",event)
    this.setState({
        view: "welllist"
      })
  }




  signupOnClick = () => { 
    // console.log("signupOnClick",event)
    this.setState({
        view: "signup"
      })
  }

  guestOnClick = () => { 
    // console.log("guestOnClick",event)
    this.setState({
        view: "guestwelllist"
      })
  }

  addWellOnClick = (e) => { 
    console.log("addWellOnClick",e)
    this.setState({
        view: "addnewwell"
      })
  }

  updateWellOnClick = (e) => {
    this.updateCurrentWellInfoOnClick(e)//Sending the current well object to UpdateWellComp
    console.log("updateWellOnClick",e.target.id)
    this.setState({
        view: "updatewell"
      })
  }

  getWellList =(e) => {
    console.log("click from getwelllist");
    console.log(this.state);
    fetch('https://mcdan-coding-exercise.azurewebsites.net/api/v1/well')
      .then(response => response.json())
      .then(users=> {this.setState({ wellListState: users})});
  }



  cancelOnClick= (e) => { 
    console.log("cancelOnClick",e)
    this.setState({
        view: "welllist"
      })
  }

  logOut = (e) => {
    // console.log("click form getWellListLogOut",e);
    localStorage.clear();
    console.log(localStorage.getItem("user_token"))
    this.setState({
        view: "main"
      })

  }

  

  render() {
    let setPage;
    if (this.state.view === "main") {
      setPage = <MainCardComp
                  guestOnClick={this.guestOnClick}
                  signupOnClick={this.signupOnClick}
                  loginOnClick = {this.loginOnClick}/>;

    } else if (this.state.view === "welllist"){
      setPage = <WellListComp
                addWellOnClick = {this.addWellOnClick}
                getWellList = {this.getWellList}
                wellListState = {this.state.wellListState}
                updateWellOnClick = {this.updateWellOnClick}
                updateCurrentWellInfoOnClick = {this.updateCurrentWellInfoOnClick}
                logOut = {this.logOut}
               />;

    } else if (this.state.view === "signup"){
      setPage = <RegisterComp
                registerSubmitOnClick={this.registerSubmitOnClick}
                loginCancelOnClick = {this.loginCancelOnClick}/>;


    } else if (this.state.view === "addnewwell"){
      setPage = <NewWellComp
                registerSubmitOnClick = {this.registerSubmitOnClick}
                addWellOnClick={this.addWellOnClick}
                wellListState = {this.state.wellListState}
                cancelOnClick = {this.cancelOnClick}
                getWellList = {this.getWellList}
                logOut = {this.logOut}
                />;
    } else if (this.state.view === "updatewell"){
      setPage = <UpdateWellComp 
                cancelOnClick = {this.cancelOnClick}
                updateInputWell= {this.state.wellupdate}
                getWellList ={this.getWellList}
                updateSubmitOnClick = {this.updateSubmitOnClick}
                logOut = {this.logOut}/>;

    } else if (this.state.view === "login"){
     setPage = <LoginComp 
                registerSubmitOnClick = {this.registerSubmitOnClick}
                loginCancelOnClick = {this.loginCancelOnClick}/>;
    } else if (this.state.view === "guestwelllist"){
     setPage = <GuestComp 
                getWellList = {this.getWellList}
                wellListState = {this.state.wellListState}
                loginOnClick = {this.loginOnClick}
                signupOnClick = {this.signupOnClick}
                />;
    }

    // console.log(this.state.view)
    
      return (
        <div className="App">
          {setPage}
        </div>
    );
  }
}

export default App;
