import React from 'react'
import classes from './HeaderOption.module.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/userSlice'

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div onClick={onClick} className={classes.headerOption}>
      {Icon && <Icon className={classes.icon} />}
      {avatar && (
        <Avatar className={classes.icon} src={user?.photoURL }>{(user && user.displayName) && user.displayName[0]}</Avatar>
      )}
      <h3 className={classes.title}>{title && title}</h3>
    </div>
  )
}

export default HeaderOption