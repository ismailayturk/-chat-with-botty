import React from "react";

function ChatWrapper(props) {
  return (
    <div className="container">
        <div className="col-md-12 mt-5 chat">
        {props.children}
      </div>
    </div>
  );
}

export default ChatWrapper;
