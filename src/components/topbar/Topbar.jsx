import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Friendify</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />

          <input placeholder="Search for posts,friends,socials,anything..." className="searchInput" />

        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>

        </div>
        <div className="topbarIcons"></div>
        <div className="topbarIconItem">
          <PersonIcon />
          <span className="topbarIconBadge">1</span>
        </div>

        <div className="topbarIconItem">
          <ChatIcon />
          <span className="topbarIconBadge">2</span>
        </div>

        <div className="topbarIconItem">
          <NotificationsIcon />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/4.jpeg" alt="person4" className="topbarImg" />
      <div className="topbarIcons"></div>
    </div>
  )
}
