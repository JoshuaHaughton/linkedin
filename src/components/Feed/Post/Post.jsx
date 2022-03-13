import React from 'react'
import { Avatar } from '@mui/material';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import classes from './Post.module.css'
import InputOption from '../InputOption/InputOption';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <Avatar />
        <div className={classes.info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes.body}>
        <p>{message}</p>
      </div>

      <div className={classes.buttons}>
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color='gray'/>
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color='gray'/>
        <InputOption Icon={ShareOutlinedIcon} title="Share" color='gray'/>
        <InputOption Icon={SendOutlinedIcon} title="Send" color='gray'/>
      </div>
    </div>
  )
}

export default Post