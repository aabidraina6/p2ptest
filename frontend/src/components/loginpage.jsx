import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
// import Link from '@mui/material/Link';

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

export const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div className="App">
        <div className="Login" align="center" >
            <p style={{ textAlign: "center", fontFamily: 'Caveat', fontSize:"2.5rem" }}>Login</p>
            <br/>
            <h3>Username/Email: <br/><br/><TextField placeholder="Username/Email" padding="0.6em"  /></h3>
            <br/>
            <h3>Password: <br/><br/><PasswordField placeholder="Password" padding="0.6em"  /></h3>
            <br/>
            <button style={{cursor: "pointer" , borderRadius: "10px" ,fontSize: "15px" ,width: "100px" , height: "30px"}} onClick={()=>{navigate("/home")}}> Login </button>
            <br/><br/>
            Don't have an Account yet?? &nbsp;<button style={{cursor: "pointer" , borderRadius: "10px" ,fontSize: "15px" ,width: "100px" , height: "30px"}} onClick={()=>{navigate("/register")}}> Register </button>
            <br/><br/>
        </div>
        </div>
    )
}