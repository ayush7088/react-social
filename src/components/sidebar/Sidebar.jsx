import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <FeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <ChatIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Chats</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
