import React from 'react'
import classes from './Login.module.css'
import LinkedInLogo from '../../assets/full_logo.png'

const Login = () => {

  const login = () => {

  }

  const register = () => {

  };

  return (
    <div className={classes.login}>
      <img src={LinkedInLogo} alt="Linkedin Logo" />
      <h2>Make the most of your professional life</h2>
      <form action="">
        <label>Full Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Password (6 or more characters)</label>
        <input type="password" />

        <label>Profile Picture (Optional)</label>
        <input type="text" />

        <p>By clicking Agree & Join, you agree to the LinkedIn <span className={classes.blue}>User Agreement</span>, <span className={classes.blue}>Privacy Policy</span>, and <span className={classes.blue}>Cookie Policy</span>.</p>

        <button onCLick={login} > Agree & Join</button>
        {/* <button>Agree & Join</button> */}
        <p className={classes.loginToggle}>Already on LinkedIn?
          <span onClick={register} className={classes.blue} > Sign In</span>
        </p>
      </form>
      <p>Looking to create a page for a business?
        <span className={classes.blue} > Get help</span>
      </p>
    </div>
  )
}

export default Login