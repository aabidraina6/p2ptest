import React  , {useState}from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

export const RegistrationPage = () => {

  const [name  , setName] = useState('')
  const [phone , setPhone] = useState()
  const [email , setEmail] = useState('')
  const [pin , setPin] = useState('')
  const [state , setState] = useState('')
  const [country  , setCountry] = useState('')

  return (
    <div>
          <h1 style = {{textAlign: "center" , fontFamily: 'Caveat' , color : 'white' , marginTop:'5px'}}>P2P APP </h1>  

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="  my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "600px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="text-dark fw-bold mb-2 text-uppercase">
                  Sign Up
                </h2>
                <br></br>
                <MDBInput
                  style={{ color: "black"  }}
                  wrapperClass="mb-3 mx-5 w-100"
                  labelClass="text-dark"
                  label="Name"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={name}
                />
                <MDBInput
                  style={{ color: "black" }}
                  wrapperClass="mb-3 mx-5 w-100"
                  labelClass="text-dark"
                  label="Phone Number"
                  id="formControlLg"
                  type="tel"
                  size="lg"
                  value={phone}
                />
                <MDBInput
                  style={{ color: "black" }}
                  wrapperClass="mb-3 mx-5 w-100"
                  labelClass="text-dark"
                  label="email"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={email}
                />
                <MDBInput
                  style={{ color: "black" }}
                  wrapperClass="mb-3 mx-5 w-100"
                  labelClass="text-dark"
                  label="Pin Code"
                  id="formControlLg"
                  type=""
                  size="lg"
                  value={pin}
                />

                <MDBInput
                  style={{ color: "black" }}
                  wrapperClass="mb-3 mx-5 w-100"
                  labelClass="text-dark"
                  label="State"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={state}
                />
                <MDBInput
                  style={{ color: "black" }}
                  wrapperClass="mb-3 mx-5 w-100"
                  labelClass="text-dark"
                  label="Country"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={country}
                />

                <p>
                  By signing up you agree to <a href="/register">terms & conditions</a>
                </p>
                <MDBBtn outline className="mx-2 px-5" color="black" size="lg">
                  Sign Up
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
