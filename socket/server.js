const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});


let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
    //when connect
    // console.log("a user connected.");
    io.emit("welcome", "Thanos is deads");

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        if (userId != null) {
            addUser(userId, socket.id);
        }
        io.emit("getUsers", users);
    });

    // *********************************************************************
    // CODE FOR WEBRTC 
    socket.emit("me", socket.id);
    
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    });
    // CODE FOR WEBRTC 
    // *********************************************************************

    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        if(user !== undefined){
        io.to(user.socketId).emit("getMessage", {
            senderId,
            text,
        });}
    });

    //when disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});