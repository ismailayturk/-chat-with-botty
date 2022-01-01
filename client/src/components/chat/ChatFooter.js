import React from "react";

function ChatFooter(props) {
    const keyPressManagement = (e) => {
        console.log('keypresss tetiklendi')
          props.sendMessage();
      e.preventDefault();
      e.target.value = "";
    };
  return (
    <div className="card-footer">
    <div className="input-group">
      <div className="input-group-append">
        <span className="input-group-text attach_btn">
          <i className="fas fa-paperclip" />
        </span>
      </div>
      <textarea
      onChange={(event) => props.setMessage(event.target.value)}
      onKeyPress={(e) => {
        if (e.charCode === 13) {
          keyPressManagement(e);
        }
      }}
        name="messageTextarea"
        className="form-control type_msg"
        placeholder="Type your message..."
        defaultValue={""}
      />
    </div>
  </div>
  );
}

export default ChatFooter;
