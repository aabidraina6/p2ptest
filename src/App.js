import React from "react";
// import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Mypage } from "./components/mypage";


// function App()
// {
  
//   return (
//     <Router>
//         <Route exact path="/" element={mypage} />
//         <Route exact path="/home" element={mypage} />
//     </Router>
//   );

// }


function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<Mypage />} />
        <Route  path="/home" exact element={<Mypage />} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;