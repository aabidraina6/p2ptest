import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import axios from 'axios'

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

export const RegistrationPage = () => {
    const navigate = useNavigate()

    const [name  , setName] = useState('')
    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [pin , setPin] = useState('')
    const [state , setState] = useState('')
    const [country  , setCountry] = useState('')
    const [pass, setPass] = useState('')

    const RegisterPage = async () => {
      const detailsobj = {
        name:name,
        phoneno: phone,
        email: email,
        location: "",
        state: state,
        country: country,
        profession: "",
        category: "",
        password: pass,
        pincode: pin,
      }
      console.log(detailsobj);
      axios
      .post("http://localhost:4000/data/registeradd", detailsobj)
      
      .then(res => {

        if(res.data.data === "Exists"){
          window.alert("Email already registered !!"); 
          return
        }
        if(res.data.data === "Existsph"){
          window.alert("Phone Number already registered !!"); 
          return
        }
        else{
          window.alert("User registered successful !!"); 
        (window.location.href = "/login")
        }
      })
    }
  
    return (
        <div className="App">
        <div className="Login" align="center" >
            <h2 style={{ textAlign: "center", fontFamily: 'Caveat', fontSize:"2.5rem" }}>Register</h2>
            <h3> Name: <br/><TextField placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} padding="0.4em" /></h3>
            <h3> Phone Number: <br/><TextField placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} padding="0.4em" /></h3>
            <h3> Email: <br/><TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} padding="0.4em" /></h3>
            <h3> PIN: <br/><TextField placeholder="PIN Code" value={pin} onChange={(e) => setPin(e.target.value)} padding="0.4em" /></h3>
            <h3> State: <br/><TextField placeholder="State" value={state} onChange={(e) => setState(e.target.value)} padding="0.4em" /></h3>
            <h3> Country: <br/><TextField placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} padding="0.4em" /></h3>
            <h3> Password: <br /><PasswordField placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} padding="0.4em" /></h3>
          
            <button style={{cursor: "pointer" , borderRadius: "10px" ,fontSize: "15px" ,width: "100px" , height: "30px"}} onClick={()=>{RegisterPage()}}> Register </button>
        </div>
        </div>
    )
}