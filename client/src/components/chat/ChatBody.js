import React from "react";

function ChatBody(props) {
  return (
    <div className="card-body msg_card_body">
{props.messages.map((object, i) =>
        object.type == "bottyMessage" ? (
          <div key={i} className="d-flex mb-4 justify-content-start">
          <div className="img_cont_msg">
            <img
              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              className="rounded-circle user_img_msg"
            />
          </div>
          <div className="msg_cotainer">{object.messageText}</div>
        </div>
        ) : (
          <div key={i} className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
          {object.messageText}
          </div>
          <img
              src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"
              className="rounded-circle user_img_msg"
            />
        </div>
        )
      )
      }

{
          props.botTyping && (
            <div className="d-flex mb-4 justify-content-start">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">Botty is typing...</div>
          </div>
          )
      }
      
  
    </div>
  );
}

export default ChatBody;
