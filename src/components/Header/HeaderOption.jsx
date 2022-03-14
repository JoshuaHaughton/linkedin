import React from 'react'
import classes from './HeaderOption.module.css'
import { Avatar } from '@mui/material'

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  return (
    <div onClick={onClick} className={classes.headerOption}>
      {Icon && <Icon className={classes.icon} />}
      {avatar && (
        <Avatar className={classes.icon} src={avatar} />
      )}
      <h3 className={classes.title}>{title && title}</h3>
    </div>
  )
}

export default HeaderOption