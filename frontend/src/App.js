import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage";
import { LoginPage } from "./components/loginpage";
import { RegistrationPage } from "./components/registrationpage";

function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<Homepage />} />
        <Route  path="/home" exact element={<Homepage />} />
        <Route  path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegistrationPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );

}

export default App;