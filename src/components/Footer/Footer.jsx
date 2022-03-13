import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/full_logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <div>
          <img src={Logo} /> <span> &copy; 2021</span>
        </div>

        <p>About</p>
        <p>Accessibility</p>
        <p>User Agreement</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Copyright Policy</p>
        <p>Brand Policy</p>
        <p>Community Guidelines</p>
        <p>Language</p>
      </div>
    </footer>
  );
};

export default Footer;
