import classes from "./Widgets.module.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Logo from '../../assets/logo.png'
import FullLogo from '../../assets/full_logo.png'
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Widgets = () => {
  const user = useSelector(selectUser);
  const newsArticle = (heading: string, subtitle: string) => (
    <div className={classes.article}>
      <div className={classes.articleLeft}>
        <FiberManualRecordIcon />
      </div>

      <div className={classes.articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className={classes.widgets}>
      <div className={classes.news}>
        <div className={classes.header}>
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>

        {newsArticle("I Love Frontend Design!", "Top News")}
        {newsArticle("The end of Covid-19?", "42m ago")}
        {newsArticle("Are you having a good day today?", "14h ago")}
        {newsArticle(
          "Ottawa approves Bay du Nord project",
          "22h ago",
        )}
        {newsArticle(
          "Burger King hit with Whopper of suit",
          "23h ago",
        )}
      </div>

      <div className={classes.ad}>
        <div className={classes.adHeader}>
          <p>Ad <FontAwesomeIcon icon={faEllipsis} className={classes.ellipsisIcon} /></p>
          
        </div>

        <div className={classes.adBody}>
          <p className={classes.leadGeneration}>{`${user.displayName}, drive better results by LinkedIn`}</p>

          <div className={classes.photos}>
          <Avatar src={user?.photoURL} className={classes.avatar}>
          {user.displayName && user.displayName[0]}
        </Avatar>

            <img src={Logo} alt="" className={classes.logo} />
          </div>

          <p className={classes.textUnderPhoto}>LinkedIn's essential lead generation toolkit</p>

          <button>Free Download</button>
        </div>

        
      </div>

      <div className={classes.linkSection}>
          <div className={classes.links}>
            <span>About</span> &nbsp; &nbsp; <span>Accessibility</span> &nbsp; &nbsp; <span>Help Center</span> &nbsp; &nbsp; <span>Privacy & Terms</span>&nbsp; &nbsp; <span>Ad Choices</span> &nbsp; &nbsp; <span>Advertising</span> &nbsp; &nbsp; <span>Business Services</span> &nbsp; &nbsp; <span>Get The LinkedIn App</span> &nbsp; &nbsp; <span>More</span>
          </div>
          <p className={classes.copyright}><span><img src={FullLogo} alt="" /></span>LinkedIn Corporation © 2022</p>
      </div>
      </div>

    
  );
};

export default Widgets;
