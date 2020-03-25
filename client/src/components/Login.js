import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
const mongoose = require('mongoose');

class Login extends Component {
  
  render() {
    const responseFacebook = (response) => {
      if(response == null){
        console.log("Login Unsuccesful");
      } else {
        const {email} = response;
        console.log(email);
        const db = "mongodb+srv://ravi:12345@mern-wvt6v.mongodb.net/test?retryWrites=true&w=majority";
        
      }
    }
    return (
      <div className="container">
        <div className="App">
        <h1>LOGIN WITH FACEBOOK</h1>
        <br />

      <FacebookLogin
        appId="476482149459528"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      </div>
      </div>
    );
  }
}

export default Login;