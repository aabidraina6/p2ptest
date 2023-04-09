import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const VideoChatRoom = () => {
  const [socket, setSocket] = useState(null);
  const [peer, setPeer] = useState(null);
  const [offer, setOffer] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [iceCandidate, setIceCandidate] = useState(null);

  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    // Create a WebSocket connection to the server
    const newSocket = io('http://localhost:8900');
    setSocket(newSocket);

    // Handle incoming signaling messages
    newSocket.on('signal', (message) => {
      switch (message.type) {
        case 'offer':
          setOffer(message);
          break;
        case 'answer':
          setAnswer(message);
          break;
        case 'iceCandidate':
          setIceCandidate(message);
          break;
        default:
          console.log('Unknown message type:', message.type);
          break;
      }
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (peer && offer) {
      // Set the remote description from the offer
      peer.setRemoteDescription(new RTCSessionDescription(offer));

      // Create an answer and set it as the local description
      peer.createAnswer()
        .then((answer) => {
          peer.setLocalDescription(answer);

          // Send the answer over WebSocket
          socket.emit('signal', {
            to: offer.from,
            type: 'answer',
            sdp: answer.sdp,
          });
        })
        .catch((error) => {
          console.error('Failed to create answer:', error);
        });
    }
  }, [peer, offer]);

  useEffect(() => {
    if (peer && answer) {
      // Set the remote description from the answer
      peer.setRemoteDescription(new RTCSessionDescription(answer));
    }
  }, [peer, answer]);

  useEffect(() => {
    if (peer && iceCandidate) {
      // Add the ICE candidate
      peer.addIceCandidate(new RTCIceCandidate(iceCandidate));
    }
  }, [peer, iceCandidate]);

  const startVideoChat = () => {
    // Get the user's media stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Set the local video element's source to the user's media stream
        localVideoRef.current.srcObject = stream;

        // Create a new peer connection
        const newPeer = new RTCPeerConnection();

        // Add the user's media stream to the peer connection
        stream.getTracks().forEach((track) => {
          newPeer.addTrack(track, stream);
        });

        // Listen for ICE candidates and send them over WebSocket
        newPeer.addEventListener('icecandidate', (event) => {
          if (event.candidate) {
            socket.emit('signal', {
              to: 'other-peer-id',
              type: 'iceCandidate',
              candidate: event.candidate,
            });
          }
        });

        // Listen for incoming media streams and add them to the remote video element
        newPeer.addEventListener('track', (event) => {
          remoteVideoRef.current.srcObject = event.streams[0];
        });

        setPeer(newPeer);
      })
      .catch((error) => {
        console.error('Failed to get user media:', error);
      });
  };

  const handleCall = () => {
    // Send an offer over WebSocket
    peer.createOffer()
      .then((offer) => {
        peer.setLocalDescription(offer);

        socket.emit('signal', {
          to: 'other-peer-id',
          type: 'offer',
          sdp: offer.sdp,
        });
      })
      .catch((error) => {
        console.error('Failed to create offer:', error);
      });
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay></video>
      <video ref={remoteVideoRef} autoPlay></video>
      <button onClick={startVideoChat}>Start Video Chat</button>
      <button onClick={handleCall}>Call Other Peer</button>
    </div>
  );
};

export default VideoChatRoom;

