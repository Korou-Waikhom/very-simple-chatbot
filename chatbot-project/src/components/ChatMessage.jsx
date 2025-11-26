//import { useState, useRef, useEffect } from "react";
import "./ChatMessage.css";

import RobotProfileImage from "../assets/robot.png";
//import UserProfileImage from "../assets/user.png";
import UserProfileImage from "../assets/profile-1.jpg";

export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */
  console.log(UserProfileImage);

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img className="chat-message-profile" src={RobotProfileImage} />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img className="chat-message-profile" src={UserProfileImage} />
      )}
    </div>
  );
}
