import styles from "./purschase.module.scss";
import Button from "../../shared/button/Button.jsx";

export default function Purschase({className = "", className2 = ""}){

    return (
      <div className={styles[className]}>
        <div>
          <p>30€</p>
        </div>

        <div>
          <Button className={className2} text="buy →" />
        </div>
      </div>
    );

}