import React from 'react';
import SidebarChat from './SidebarChat';
import './Sidebar.css';

// Material UI
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar src="https://avatars0.githubusercontent.com/u/68485187?s=460&u=887ccfe45f64cd26643e20e5bcee4441b449cae9&v=4"/>
        <div className="sidebar__headerRight">
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

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
      
  )
}

export default Sidebar;