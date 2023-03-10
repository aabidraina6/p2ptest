import React from 'react';
import { useNavigate  } from 'react-router-dom';
import image from './homepageutils/images.jpeg';
  
const divstyle = {
  // marginTop: "4%",
  // marginLeft: "9%",
  // // height: "330px",
  // color: "white",
  // width: "300px",
  // backgroundColor: "#87CEEB",
  // padding: "10px",
  // fontFamily: "Arial",
  // fontColor: "black",
  margin: "auto",
  height: "45%",
  color: "white",
  width: "90%",
  backgroundColor: "#87CEEB",
  fontFamily: "Arial",
  borderRadius: "30px"
};


const FrontPage = () => {
  const history = useNavigate();

  const handleSignIn = () => {
    history('/login');
  };

  const handleSignUp = () => {
    history('/register');
  };

  return (
    <div className="App">
    <div className="front-page">
    <h1 style={{ textAlign: "center", fontFamily: 'Caveat' }}>P2P APP </h1>
      <div style = {divstyle}>
      <img src={image} align="center" style = {{marginLeft: "17px", paddingTop: "3.5%", maxHeight: "90%", width: "91%",  align:"center", borderRadius: "35px"}} alt="social media app" className="front-page__image" />
      </div>
      <br /><br /><br /><br />
      <div align="center" className="front-page__buttons">
      <button style={{ cursor: "pointer", borderRadius: "10px", fontSize: "15px", width: "100px", height: "30px" }} onClick={() => { handleSignUp() }}> Sign-Up </button>
      <br /><br /><br /><br />
      <button style={{ cursor: "pointer", borderRadius: "10px", fontSize: "15px", width: "100px", height: "30px" }} onClick={() => { handleSignIn() }}> Login </button>
        {/* <button className="front-page__signin" onClick={handleSignIn}>Sign In</button> */}
        {/* <button className="front-page__signup" onClick={handleSignUp}>Sign Up</button> */}
      </div>
    </div>
    </div>
  );
};

export default FrontPage;