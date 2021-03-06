import "./App.css";
import React, { useState, useEffect } from "react";
import socket from "./serverConnection";
import ChatWrapper from "../src/components/chat/ChatWrapper";
import UserInfo from "./components/chat/UserInfo";
import Messages from "./components/chat/Messages";
import UserList from "../src/components/chat/UserList";
import "../src/assest/chat/scss/chat.scss";

function App() {
  const [botTyping, setBotTyping] = useState();
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState(
    localStorage.getItem("messages") === null
      ? [{ type: "bottyMessage", messageText: "Hi! My name's Botty." }]
      : JSON.parse(localStorage.getItem("messages"))
  );

  useEffect(() => {
    getMessage();
    botTypingFunction();
  });

  const localStorageSave = (data) => {
    localStorage.setItem("messages", data);
  };

  const botTypingFunction = () => {
    socket.on("bot-typing", () => {
      setBotTyping(true);
    });
  };

  const getMessage = () => {
    socket.on("bot-message", (message) => {
      setMessages([
        ...messages,
        { type: "bottyMessage", messageText: message },
      ]);
      setBotTyping(false);
    });
    localStorageSave(JSON.stringify(messages));
  };

  const sendMessage = () => {
    if (message !== "") {
      socket.emit("user-message", message);
      setMessages([...messages, { type: "userMessage", messageText: message }]);
      localStorageSave(JSON.stringify(messages));
    }
  };

  return (
    <ChatWrapper>
      <UserList />
      <Messages
        messages={messages}
        botTyping={botTyping}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      <UserInfo />
    </ChatWrapper>
  );
}

export default App;
