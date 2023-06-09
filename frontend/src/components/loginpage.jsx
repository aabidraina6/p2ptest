import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import axios from 'axios';
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

export const LoginPage = () => {
    const navigate = useNavigate()
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    
    const [helperemail, setHelperemail] = useState('')
    const [helperpass, setHelperpass] = useState('')
    const [invaliduser, setInvaliduser] = useState('')

    const Logincheck = async () => {
        console.log("email is ",email);
        console.log("pass is ", pass);

        if(email === ""){
            setHelperemail("Email is necessary!!")
            return;
        }else{
            setHelperemail("")
        }

        if(pass === ""){
            setHelperpass("Password is necessary!!")
            return;
        }
        else{
            setHelperpass("")
        }

        const detailsobj = {
            email: email,
            password: pass,
        }

        // console.log(detailsobj);
        if (
            detailsobj["email"] !== "" &&
            detailsobj["password"] !== ""
        ) {
            console.log("all is well till now");
            console.log(detailsobj);
            axios
                .post("http://localhost:4000/data/logincheck", detailsobj)
                .then(res => {
                    
                    console.log(res.data)
                    console.log("here i am in the login page with my data");
                    if (res.data.data === "Invalid Credentials") {
                        console.log("invalid user");
                        setInvaliduser("Please Enter Valid Credentials")
                        // window.alert("Invalid Credentials");

                    } else {
                        console.log("valid user");
                        localStorage.setItem("access-token", res.data);
                        (window.location.href = "/home")
                    }
                })
                .catch(err => {
                    console.log(" ----------> here we got an error");
                });
        } else {
            // console.log("all fields not filled ");
            // window.alert("All fields are mandatory !!");
        }
    };



return (
    <div className="App">
        <div className="Login" align="center" >
            <p style={{ textAlign: "center", fontFamily: 'Caveat', fontSize: "2.5rem" }}>Login</p>
            <br />
            <h3> Email: <br /></h3>
            <FormControl error variant="standard">
            <TextField placeholder="Username/Email" value={email} onChange={(e) => setEmail(e.target.value)} padding="0.6em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px"}}   id="component-error-text">{helperemail}</FormHelperText>
            </FormControl>
           
            <br />
            <h3> Password: <br /></h3>
            <FormControl error variant="standard">
            <PasswordField placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} padding="0.6em" />
            <FormHelperText style = {{color: "#FA9884", fontSize: "15px"}}   id="component-error-text">{helperpass}</FormHelperText>
            </FormControl>
            
            
            <br /><br /><br />

            {/* <button style={{ cursor: "pointer", borderRadius: "10px", fontSize: "15px", width: "100px", height: "30px" }} onClick={() => { Logincheck() }}> Login </button> */}
            <Button variant='contained' style={{ width:"29%", backgroundColor:"white", color:"black"}} onClick={() => { Logincheck() }}>Login</Button>
            <FormHelperText style = {{textAlign: "center" , color: "#FA9884", fontSize: "15px"}}   id="component-error-text">{invaliduser}</FormHelperText>
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Don't have an Account yet?? &nbsp;
            <br /><br />
            {/* <button style={{ cursor: "pointer", borderRadius: "10px", fontSize: "15px", width: "100px", height: "30px" }} onClick={() => { navigate("/register") }}> Register </button> */}
            <Button variant='contained' style={{ backgroundColor:"white", color:"black"}} onClick={() => { navigate("/register") }}>Register</Button>
            <br /><br />
        </div>
    </div>
)
}