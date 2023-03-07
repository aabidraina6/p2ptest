import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage";
import { LoginPage } from "./components/login";

function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<Homepage />} />
        <Route  path="/home" exact element={<Homepage />} />
        <Route  path="/login" exact element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;
