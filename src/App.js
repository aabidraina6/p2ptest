import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage";

function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<Homepage />} />
        <Route  path="/home" exact element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;