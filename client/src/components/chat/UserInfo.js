import React from "react";
import "../../../src/assest/chat/scss/userInfo.scss";

function UserInfo() {
  return (
   
    <div className="user-info">
    <div className="user-images">
      <div className="images">
        <div className="image">
        <img src={require("../../assest/chat/images/userinfologo.png")} />
        </div>
        <div className="image">
        <img src={require("../../assest/chat/images/userinfophoto.png")} />
        </div>
      </div>
    </div>
    <div className="info">
      <div className="item mb-4">
        <div className="title mb-2">EMAİL</div>
        <div className="text">ssttech@example.com</div>
      </div>
      <div className="item">
        <div className="title mb-2">PHONE</div>
        <div className="text">+04 - 123456789</div>
      </div>
    </div>

    <div className="info labels">
      <div className="item mb-4">
        <div className="title mb-2">LABELS</div>
        <div className="labels">
          <div className="labelItem">Bot <i className="fas fa-times"></i></div>
          <div className="labelItem">React <i className="fas fa-times"></i></div>
        </div>
      </div>
    </div>
    <div className="info list">
      <div className="item mb-4">
        <div className="title mb-2">ATTACHMENTS</div>
        <div className="list">
          <div className="list-item mb-2">Dataset.csv</div>
          <div className="list-item">bot_face.jpg</div>
        </div>
        <a href="#">View All</a>
      </div>
    </div>

    <div className="info react">
      <div className="item mb-4">
        <div className="text mb-2">REACT</div>
      </div>
    </div>
  
  </div>

  );
}

export default UserInfo;
