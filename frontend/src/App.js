import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage";
import { LoginPage } from "./components/loginpage";
import { NotFound } from "./components/notfoundpage";
import { RegistrationPage } from "./components/registrationpage";
import FrontPage  from "./components/frontpage";

function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<FrontPage />} />
        <Route  path="/home" exact element={<Homepage />} />
        <Route  path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegistrationPage/>} />
        <Route  path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;