import classes from "./Footer.module.css";
import Logo from "../../assets/full_logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <div>
          <img src={Logo} alt="LinkedIn Logo" /> <span> &copy; 2022</span>
        </div>

        <p className={classes.mandatory}>About</p>
        <p className={classes.mandatory}>Accessibility</p>
        <p className={classes.mandatory}>User Agreement</p>
        <p className={classes.mandatory}>Privacy Policy</p>
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
