import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chats.css";
import { Link } from "react-router-dom";
function Chat({ name, message, timestamp, profilepic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt={name} src={profilepic} />
        <div className="chat_detail">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat_time">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
