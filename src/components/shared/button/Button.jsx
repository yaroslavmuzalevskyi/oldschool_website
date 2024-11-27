import styles from "./button.module.scss"
import { useNavigate } from "react-router-dom";

const Button = ({ className = "", text}) => {

  return (
    <button type="button" className={styles[className]}>
      {text}
    </button>
  );
};

export default Button;