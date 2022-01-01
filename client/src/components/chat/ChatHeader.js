import React from "react";

function ChatHeader() {
  return (
    <div className="card-header msg_head">
    <div className="d-flex bd-highlight">
      <div className="img_cont">
        <img
          src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
          className="rounded-circle user_img"
        />
        <span className="online_icon" />
      </div>
      <div className="user_info">
        <span>Chat with Botty</span>
      </div>
      <div className="video_cam">
        <span>
          <i className="fas fa-video" />
        </span>
        <span>
          <i className="fas fa-phone" />
        </span>
      </div>
    </div>
    <span id="action_menu_btn">
      <i className="fas fa-ellipsis-v" />
    </span>
    <div className="action_menu">
      <ul>
        <li>
          <i className="fas fa-user-circle" /> View profile
        </li>
        <li>
          <i className="fas fa-users" /> Add to close friends
        </li>
        <li>
          <i className="fas fa-plus" /> Add to group
        </li>
        <li>
          <i className="fas fa-ban" /> Block
        </li>
      </ul>
    </div>
  </div>
  );
}

export default ChatHeader;
