import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import axios from 'axios'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';

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

    const [name  , setName] = useState('')
    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confpass, setConfpass] = useState('')

    const [helpername  , setHelpername] = useState('')
    const [helperphone , setHelperphone] = useState('')
    const [helperemail , setHelperemail] = useState('')
    const [helperpass, setHelperpass] = useState('')
    const [helperconfpass, setHelperconfpass] = useState('')



    const [pin , setPin] = useState('123456')
    const [state , setState] = useState('State')
    const [country  , setCountry] = useState('Country')
    

    const RegisterPage = async () => {

      if(name === ""){
        setHelpername("Name is necessary!!")
        // window.alert("Name is necessary!!");
        return;
      }else{
        setHelpername("")
      }

      if(phone === ""){
        setHelperphone("Phone Number is necessary!!")
        // window.alert("Phone Number is necessary!!");
        return;
      }else{
        setHelperphone("")
      }

      if(email === ""){
        setHelperemail("Email is necessary!!")
        // window.alert("Email is necessary!!");
        return;
      }else{
        setHelperemail("")
      }

      if(pin === ""){
        window.alert("Pin is necessary!!");
        return;
      }

      if(state === ""){
        window.alert("State is necessary!!");
        return;
      }

      if(country === ""){
        window.alert("Country is necessary!!");
        return;
      }

      if(pass === ""){
        setHelperpass("Password is necessary!!")
        // window.alert("Password is necessary!!");
        return;
      }else{
          setHelperpass("")
      }

      if(confpass === ""){
        setHelperconfpass("Confirm Password is necessary!!")
        // window.alert("Password is necessary!!");
        return;
      }else{
        setHelperconfpass("")
      }

      if(pass != confpass){
        setHelperconfpass("Password does not match!!")
        return;
      }else{
        setHelperconfpass("")
      }


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
            
            <h3 style = {{margin: "13px"}}> Name: </h3>
            <FormControl error variant="standard">
            <TextField placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} padding="0.5em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px" , margin: "0px"}}   id="component-error-text">{helpername}</FormHelperText>
            </FormControl>

            <h3 style = {{margin: "13px"}}> Phone Number: </h3>
            <FormControl error variant="standard">
            <TextField placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} padding="0.5em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px" , margin: "0px"}}   id="component-error-text">{helperphone}</FormHelperText>
            </FormControl>

            <h3 style = {{margin: "13px"}}> Email: </h3>
            <FormControl error variant="standard">
            <TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} padding="0.5em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px" , margin: "0px"}}   id="component-error-text">{helperemail}</FormHelperText>
            </FormControl>

            <h3 style = {{margin: "13px"}}> Password: </h3>
            <FormControl error variant="standard">
            <PasswordField placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} padding="0.5em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px" , margin: "0px"}}   id="component-error-text">{helperpass}</FormHelperText>
            </FormControl>

            <h3 style = {{margin: "13px"}}>Confirm Password: </h3>
            <FormControl error variant="standard">
            <PasswordField placeholder="Password" value={confpass} onChange={(e) => setConfpass(e.target.value)} padding="0.5em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px" , margin: "0px"}}   id="component-error-text">{helperconfpass}</FormHelperText>
            </FormControl>
            
            <br/><br/>             
            {/* <button style={{cursor: "pointer" , borderRadius: "10px" ,fontSize: "15px" ,width: "100px" , height: "30px"}} onClick={()=>{RegisterPage()}}> Register </button> */}
            <Button variant='contained' style={{marginTop:"18px", backgroundColor:"white", color:"black"}} onClick={()=>{RegisterPage()}}>Register</Button>
        </div>
        </div>
    )
}