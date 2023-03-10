import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from "styled-components";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import Arrow from "./homepageutils/arrow.svg";
import axios from 'axios'
import photo1 from "./homepageutils/slide1.png";
import photo2 from "./homepageutils/slide2.png";
import photo3 from "./homepageutils/slide3.png";
import { useNavigate } from "react-router-dom";

const slidestyle = {
  margin: "auto",
  height: "100%",
  color: "white",
  width: "90%",
  backgroundColor: "#87CEEB",
  fontFamily: "Arial",
  borderRadius: "30px"
}

export const Homepage = () => {

  const jwt = localStorage.getItem("access-token");
  if (!jwt) {
    (window.location.href = "/login")
  } else {

    axios
      .get("http://localhost:4000/auth", {
        headers: { authorization: `Bearer: ${jwt}` }
      })
      .then(res => {
        console.log("VERIFIED USER");
      })
      .catch(err => {
        console.log("error here is -->  ", JSON.stringify(err));
        localStorage.removeItem("access-token");
        (window.location.href = "/login")
      });
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontFamily: 'Caveat' }}>P2P APP </h1>
      <CarouselProvider
        // style = {{marginBottom: "170px" , height: "/300px"}}
        naturalSlideWidth={80}
        naturalSlideHeight={80}
        totalSlides={4}
      >

        <Slider  >

          <Slide index={0} >
            <div style={slidestyle}>
              <img style={{ marginLeft: "17px", paddingTop: "25%", maxHeight: "90%", maxWidth: "90%" }} src={photo1} alt="Photo1" />
            </div>
          </Slide>

          <Slide index={1} >
            <div style={slidestyle}>
              <img style={{ marginLeft: "17px", paddingTop: "25%", maxHeight: "90%", maxWidth: "90%" }} src={photo2} alt="Photo2" />
            </div>
          </Slide>

          <Slide index={2}>
            <div style={slidestyle}>
              <img style={{ marginLeft: "17px", paddingTop: "25%", maxHeight: "90%", maxWidth: "90%" }} src={photo3} alt="Photo3" />
            </div>
          </Slide>

          <Slide index={3} >
            <div style={slidestyle}>

            </div>
          </Slide>

        </Slider>

        <Wrapper style={{ marginBottom: "150px" }} >
          <div className="controls">
            <ButtonBack className="btn-arrow reverse-arrow">
              <img src={Arrow} alt="arrow" />
            </ButtonBack>
            <DotGroup className="dot-group" />
            <ButtonNext className="btn-arrow">
              <img src={Arrow} alt="arrow" />
            </ButtonNext>
          </div>
        </Wrapper>
      </CarouselProvider>
    </div>
  )

}


const Wrapper = styled.div`
  .controls {
    
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;


      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #FFFFFF;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #87CEEB;
        transition: background 0.4s ease;
      }
    }
  }
`;