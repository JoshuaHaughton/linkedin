import { faBookmark, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic: string) => (
    <div className={classes.recentItem}>
      <span className={classes.hashtags}>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarTop}>
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user?.photoURL} className={classes.avatar}>
          {user.displayName && user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={classes.stats}>
        <div className={classes.stat}>
          <p>Who viewed your profile</p>
          <p className={classes.statNumber}>1,743</p>
        </div>
        <div className={classes.stat}>
          <p>Connections</p>
          <p className={classes.statNumber}>2,437</p>
        </div>
        <div className={classes.connections}>
          <p className={classes.black}>Grow Your Network</p>
        </div>
      </div>

      <div className={classes.premium}>
        <p>Access exclusive tools & insights</p>
        <p className={classes.activatePremium}>
          <span className={classes.squareIcon}>
            <FontAwesomeIcon icon={faSquare} />
          </span>
          Reactivate Premium
        </p>
      </div>

      <div className={classes.myItems}>
        <p> <span><FontAwesomeIcon icon={faBookmark} className={classes.bookmarkIcon} /></span>My Items</p>
      </div>

      <div className={classes.sidebarBottom}>
        <div className={classes.bottomContainer}>
          <p>Recent</p>
          {recentItem("react.js")}
          {recentItem("programming")}
          {recentItem("software engineering")}
          {recentItem("design")}
          {recentItem("developer")}
        </div>

        <div className={classes.discoverMore}>Discover More</div>

      </div>
    </div>
  );
};

export default Sidebar;
