import React from "react";
import LastMessages from "../../assest/chat/js/LastMessages";
import "../../../src/assest/chat/scss/userList.scss";
function UserList() {
  return (
    <div className="userList">
        <div className="header">
          <div className="text left">
            All Messages
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </div>
          <i className="fas fa-cog" aria-hidden="true"></i>
        </div>
        <div className="userLastMessages">
          {LastMessages.map((object, i) => (
            <div
              key={i}
              className={`item ${object.user == "Botty" ? "active" : ""}`}
            >
              <div
                className="profile-icon mr-4"
                style={{ background: object.color }}
              >
                {object.user == "Botty" ? (
                  <img src={require("../../assest/chat/images/ssticon.png")} />
                ) : (
                  object.shortName
                )}
              </div>
              <div className="info">
                <div className="userName mb-1">
                  {object.user == "Botty" ? (
                    <img src={require("../../assest/chat/images/username.png")} />
                  ) : (
                    object.user
                  )}
                </div>
                <div className="text">{object.message}</div>
                <div
                  className={`last-seen ${
                    object.lastSeen == "online" ? "online" : "standart"
                  }`}
                >
                  {object.lastSeen}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default UserList;
