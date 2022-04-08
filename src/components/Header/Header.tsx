import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import Logo from "../../assets/logo.png";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    //Tell Redux we're logging out
    dispatch(logout());
    auth.signOut();
  };

  //Clicking on the profile photo logs us out (top right)

  return (
    <div className={classes.header}>
      <div className={classes.headerContentWrapper}>
        <div className={classes.headerLeft}>
          <img src={Logo} alt="" className={classes.logo} />

          <div className={classes.headerSearch}>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className={classes.headerRight}>
          <HeaderOption Icon={HomeIcon} title="Home" active={true} />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        </div>
      </div>
    </div>
  );
};

export default Header;
