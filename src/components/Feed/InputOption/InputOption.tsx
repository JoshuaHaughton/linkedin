import classes from './InputOption.module.css'
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  title: string
  Icon: SvgIconComponent
  color: string;
}

const InputOption = ({ title, Icon, color }: Props) => {
  return (
    <div className={classes.inputOption}>
      <Icon style={{ color }} className={classes.icon}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption