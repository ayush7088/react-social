import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';


export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Friendify</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon />

            <input placeholder="Search for posts, friends,anything..." className="searchInput" />

          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">HomePage</span>
            <span className="topbarLink">TimeLine</span>

          </div>
          <div className="topbarIcons"></div>
        </div>

    </div>
  )
}
