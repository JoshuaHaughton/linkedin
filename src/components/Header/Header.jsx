import React from 'react'
import classes from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Logo from '../../assets/logo.png'
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className={classes.header}>

      <div className={classes.headerLeft}>
 
        <img src={Logo} alt="" className={classes.logo}/>

        <div className={classes.headerSearch}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className={classes.headerRight}>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
      </div>

    </div>
  )
}

export default Header