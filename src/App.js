import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

// Components
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

// CSS
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
        setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('32a9659dda0c6382fb1b', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
