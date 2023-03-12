import React from 'react';
import axios from 'axios';
import Message from './message';
import "./chatbox.css"
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { io } from "socket.io-client"

export const Chatboxpage = () => {

    const [userdet, setUserdet] = useState([]);
    useEffect(() => {
        const jwt = localStorage.getItem("access-token");
        if (!jwt) {
            (window.location.href = "/login")
        } else {

            axios
                .get("http://localhost:4000/auth", {
                    headers: { authorization: `Bearer: ${jwt}` }
                })
                .then(res => {
                    // console.log("VERIFIED USER", res.data);
                    setUserdet(res.data);
                })
                .catch(err => {
                    console.log("error here is -->  ", JSON.stringify(err));
                    localStorage.removeItem("access-token");
                    (window.location.href = "/login")
                });
        }
    }, [userdet._id]);

    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { id } = useParams();
    const user = userdet

    // const [socket, setSocket] = useState(null);
    const socket = useRef();
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        // socket.current.on("getMessage", (data) => {
        //   setArrivalMessage({
        // sender: data.senderId,
        // text: data.text,
        // createdAt: Date.now(),
        //   });
        // });
    }, []);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            console.log("users is -> " ,users);
        });
    }, [user]);


    useEffect(() => {
        const getMessages = async () => {
            // try {
            //     const res = await axios.get("/messages/" + currentChat?._id);
            //     setMessages(res.data);
            // } catch (err) {
            //     console.log(err);
            // }
            const detailsobj = {
                convid: id,
            }

            axios
                .post("http://localhost:4000/mess/getmess", detailsobj)
                .then(res => {
                    // console.log("success!! in getmess");
                    // console.log(res.data)
                    setMessages(res.data);
                })
                .catch(err => {
                    console.log(" ----------> here we got an error");
                });
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: id,
        };

        try {
            const res = await axios.post("http://localhost:4000/mess", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }

        // console.log(message);
    }

    // console.log("messages are -> " , messages);

    return (
        <div className="App">
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        {messages.map(m => (
                            <Message message={m} own={m.sender === user._id} />
                        ))}

                    </div>
                    <div className="chatBoxBottom">
                        <textarea
                            className="chatMessageInput"
                            placeholder="write something..."
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                        ></textarea>
                        <button className="chatSubmitButton" onClick={handleSubmit}>
                            Send
                        </button>

                    </div>
                </div>
            </div>
        </div >
    );
};
