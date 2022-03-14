import React from 'react'
import classes from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import Logo from '../../assets/logo.png'
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../store/userSlice';
import { auth } from '../../firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    //Tell Redux we're logging out
    console.log('test');
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className={classes.header}>

      <div className={classes.headerLeft}>
 
        <img src={Logo} alt="" className={classes.logo}/>

        <div className={classes.headerSearch}>
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className={classes.headerRight}>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='My Network' />
        <HeaderOption Icon={ChatIcon} title='My Network' />
        <HeaderOption Icon={NotificationIcon} title='My Network' />
        <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}/>
      </div>

    </div>
  )
}

export default Header