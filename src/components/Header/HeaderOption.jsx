import React from 'react'
import classes from './HeaderOption.module.css'

const HeaderOption = ({ title, Icon }) => {
  return (
    <div className={classes.headerOption}>
      {Icon && <Icon className={classes.icon} />}
      <h3 className={classes.title}>{title && title}</h3>
    </div>
  )
}

export default HeaderOption