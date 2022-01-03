import React from "react";
import "../../../src/assest/chat/scss/messages.scss";

function Messages(props) {
    
const keyPressManagement = (e) => {
    props.sendMessage();
    e.preventDefault();
    e.target.value = "";
  };

  return (
    <div className="messages">
    <div className="header">
      <div className="left active-info">
        <div className="profile-icon mr-4">
          <img src={require("../../assest/chat/images/ssticon.png")} />
        </div>
        <div className="info">
          <div className="userName mb-1">
            <img src={require("../../assest/chat/images/username.png")} />
          </div>
          <div className="text">Cloud, The Internet</div>
        </div>
      </div>
      <div className="right active-info">
        <div className="mr-4">
          <i className="far fa-eye"></i>
          <p className="no-margin">botty-beep-boop</p>
        </div>
        <div>
          <i className="far fa-clock" aria-hidden="true" />
          <p className="no-margin">5m</p>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="messageList">
        {props.messages.map((object, i) => (
          <div
            key={i}
            className={`message clearfix ${
              object.type == "bottyMessage" ? "oppenent" : "me"
            }`}
          >
            <p className="text">{object.messageText}</p>
          </div>
        ))}

        {props.botTyping && (
          <div className="oppenent message clearfix ">
            <p className="text">Botty is typing...</p>
          </div>
        )}
      </div>
    </div>
    <div className="footer">
      <div className="footer-wrapper">
        <div className="left  v-center">
          <input
            placeholder="Write a message..."
            id="user-message-input"
            autoComplete="off"
            onChange={(event) => props.setMessage(event.target.value)}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                keyPressManagement(e);
              }
            }}
          />
        </div>
        <div className="right v-center">
          <button onClick={props.sendMessage}>Send</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Messages;
