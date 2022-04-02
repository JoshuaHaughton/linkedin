import classes from "./HeaderOption.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  Icon?: SvgIconComponent
  onClick?: () => void;
  active?: boolean;
  avatar?: boolean;
  title: string;
}

const HeaderOption = ({ avatar, title, Icon, onClick, active }: Props): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className={classes.headerOption}>
      {Icon && <Icon className={!active ? classes.icon : classes.active} /> as unknown as React.FC}
      {avatar && (
        <Avatar className={classes.icon} src={user?.photoURL}>
          {user && user.displayName && user.displayName[0]}
        </Avatar>
      )}
      <h3 className={!active ? classes.title : classes.activeTitle}>
        {title && title}
      </h3>
    </div>
  );
};

export default HeaderOption;
