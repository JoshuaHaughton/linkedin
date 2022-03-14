import React from "react";
import classes from "./Sidebar.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);


  const recentItem = topic => (
    <div className={classes.recentItem}>
      <span className={classes.hashtags}>#</span>
      <p>{topic}</p>
    </div>
  )
  

  return (
    <div className={classes.sidebar}>

      <div className={classes.sidebarTop}>
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
        <Avatar src={user.photoURL ? user.photoURL : null} className={classes.avatar}>{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={classes.stats}>
        <div className={classes.stat}>
          <p>Who viewed you</p>
          <p className={classes.statNumber}>1,743</p>
        </div>
        <div className={classes.stat}>
          <p>Views on post</p>
          <p className={classes.statNumber}>2,437</p>
        </div>
      </div>

      <div className={classes.sidebarBottom}>
        <p>Recent</p>
        {recentItem('react.js')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('dveloper')}
      </div>


    </div>
  );
};

export default Sidebar;
