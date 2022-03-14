import React from 'react'
import classes from './InputOption.module.css'

const InputOption = ({ title, Icon, color }) => {
  return (
    <div className={classes.inputOption}>
      <Icon style={{ color }} className={classes.icon}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption