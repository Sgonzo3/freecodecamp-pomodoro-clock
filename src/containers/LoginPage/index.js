import React, { Component } from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import Clocky from "../../assets/Images/ClockyMascot.jpg";


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    }

  render(){
    return(
      <div className="login-body">
        <LoginHeader/>
          <img className='Login-Img' src={Clocky} />
        <LoginForm/>
      </div>
    )
  }




}
