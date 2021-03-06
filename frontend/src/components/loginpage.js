

import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Login from './Auth/login';
import Register from './Auth/register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                })
            }
    handleClick(event){
        // console.log("event",event);
        var loginmessage;
        if(this.state.isLogin){
        var loginscreen=[];
        loginscreen.push(<Register parentContext={this}/>);
        loginmessage = "Already registered.Go to Login";
        this.setState({
                        loginscreen:loginscreen,
                        loginmessage:loginmessage,
                        buttonLabel:"Login",
                        isLogin:false
                    })
        }
        else{
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this}/>);
        loginmessage = "Not Registered yet.Go to registration";
        this.setState({
                        loginscreen:loginscreen,
                        loginmessage:loginmessage,
                        buttonLabel:"Register",
                        isLogin:true
                    })
        }

    }
  render() {
    let divStyle = {
        
      marginTop: "150px",
      // margin: "auto",
    };
    return (
      <div style={divStyle} className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <Button label={this.state.buttonLabel} variant="outlined" color="primary"  onClick={(event) => this.handleClick(event)}>
               {this.state.buttonLabel}
      </Button>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
export default Loginscreen;

