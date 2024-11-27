import styles from "./buy.module.scss";
import Sizes from "../sizes/sizes.jsx";
import Purschase from "../purschase/purschase.jsx";

function Buy({image}){

    return (
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img src={image} alt="hoodie" />
        </div>

        <div className={styles.card_info}>
          <div className={styles.card_name}>
            <p>Skeleton hoodie</p>
          </div>
          <Sizes className="card_sizes_list_black" />
          <Purschase
            className="card_price_black"
            className2="button_card_black"
          />
        </div>
      </div>
    );

}

export default Buy;