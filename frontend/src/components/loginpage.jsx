import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import axios from 'axios';


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


    const Logincheck = async () => {
        console.log("email is ",email);
        console.log("pass is ", pass);

        if(email === ""){
            window.alert("Email is necessary!!");
            return;
        }

        if(pass === ""){
            window.alert("Password is necessary!!")
            return;
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
                        window.alert("Invalid Credentials");

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
            <h3> Email: <br /><br /><TextField placeholder="Username/Email" value={email} onChange={(e) => setEmail(e.target.value)} padding="0.6em" /></h3>
            <br />
            <h3> Password: <br /><br /><PasswordField placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} padding="0.6em" /></h3>
            <br />
            <button style={{ cursor: "pointer", borderRadius: "10px", fontSize: "15px", width: "100px", height: "30px" }} onClick={() => { Logincheck() }}> Login </button>
            <br /><br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Don't have an Account yet?? &nbsp;
            <br /><br />
            <button style={{ cursor: "pointer", borderRadius: "10px", fontSize: "15px", width: "100px", height: "30px" }} onClick={() => { navigate("/register") }}> Register </button>
            <br /><br />
        </div>
    </div>
)
}