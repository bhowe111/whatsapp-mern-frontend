import React from 'react';
import { useState } from 'react';
import axios from '../axios';

// Material UI
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon/";
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { Avatar, IconButton } from "@material-ui/core/";

import './Chat.css';

function Chat({ messages }) {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: 'Demo app',
      timestamp: 'just now',
      received: false,
    });

    setInput('');
  };
  
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
      {messages.map((message) => (
        <p className={`chat__message ${message.received && 'chat__receiver'}`}>
          <span className="chat__name">{message.name} </span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span>
        </p>
      ))}

      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text" 
          placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicNoneOutlinedIcon />
      </div>
    </div>
  )
}

export default Chat;
