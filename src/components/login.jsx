import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const TextField = styled.input.attrs(props => ({
    type: 'text',
    size: 30,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 3px;
  padding: ${props => props.padding};
`

const PasswordField = styled.input.attrs(props => ({
    type: 'password',
    size: 30,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 3px;
  align: center;
  padding: ${props => props.padding};
`
const slidestyle = {
    margin: "auto",
    height: "80%",
    color: "white",
    width: "25%",
    backgroundColor: "#87CEEB",
    fontFamily: "Arial",
    borderRadius: "30px"
  }

export const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div className="Login" style={slidestyle} align="center" >
            <p style={{ textAlign: "center", fontFamily: 'Caveat', fontSize:"2.5rem" }}>Login</p>
            <h3>Username/Email: <br/><br/><TextField placeholder="Username/Email" padding="0.6em"  /></h3>
            <h3>Password: <br/><br/><PasswordField placeholder="Password" padding="0.6em"  /></h3>
            <h3>Confirm Password: <br/><br/><PasswordField placeholder="Password" padding="0.6em"  /></h3>
            <br/>
            <button onClick={()=>{navigate("/home")}}>Sign In</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{navigate("/register")}}>Sign Up</button>
        </div>
    )
}