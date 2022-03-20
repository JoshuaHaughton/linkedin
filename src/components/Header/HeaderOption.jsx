import React from "react";
import classes from "./HeaderOption.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const HeaderOption = ({ avatar, title, Icon, onClick, active }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className={classes.headerOption}>
      {Icon && <Icon className={!active ? classes.icon : classes.active} />}
      {avatar && (
        <Avatar className={classes.icon} src={user?.photoURL}>
          {user && user.displayName && user.displayName[0]}
        </Avatar>
      )}
      <h3 className={!active ? classes.title : classes.activeTitle}>
        {title && title}
      </h3>
    </div>
  );
};

export default HeaderOption;
