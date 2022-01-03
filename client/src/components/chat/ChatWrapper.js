import React from "react";

function ChatWrapper(props) {
  return (
    <div className="chatWrapper">
        {props.children}
      </div>
  );
}

export default ChatWrapper;
