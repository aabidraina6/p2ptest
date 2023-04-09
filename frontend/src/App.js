import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Homepage } from "./components/homepage";
import { LoginPage } from "./components/loginpage";
import { NotFound } from "./components/notfoundpage";
import { RegistrationPage } from "./components/registrationpage";
import FrontPage  from "./components/frontpage";
import { Chatpage1 } from "./components/chatlist";
import { Chatboxpage } from "./components/chatboxpg";
import Notifications from "./components/notifications";
import Optionspg from "./components/options";
import Videoplayer from "./components/videoplayer";
import VideoChatRoom from "./components/homepageutils/webrtc";

function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videochat" exact element = {<VideoChatRoom/>}></Route>
        <Route  path="/" exact element={<FrontPage />} />
        <Route  path="/home" exact element={<Homepage />} />
        <Route  path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegistrationPage/>} />
        <Route path="/cl" exact element={<Chatpage1/>} />
        <Route path="/chbx/:id" exact element={<Chatboxpage/>} />
        <Route path="/vid" exact element={<Videoplayer/>} />
        <Route path="/notif" exact element={<Notifications/>} />
        <Route path="/opt" exact element={<Optionspg/>} />
        <Route  path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;