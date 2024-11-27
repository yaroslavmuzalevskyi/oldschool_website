import styles from "./assortment.module.scss";
import Buy from "../../../../widgets/buy/Buy.jsx";

function Shop(){

    return (
      <div className={styles.shop}>
        <div className={styles.shop_left}></div>
        <div className={styles.shop_hoodie_container}>
          <div className={styles.shop_header}>All Items</div>
          <div className={styles.shop_center_header}>Hoodie</div>
          <div className={styles.shop_center_showcase}>
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
          </div>
          <div className={styles.shop_center_header}>T-shirts</div>
          <div className={styles.shop_center_showcase}>
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
            <Buy image="../../../../../public/images/assortment/hoodie1.png" />
          </div>
        </div>
        <div className={styles.shop_right}></div>
      </div>
    );

}

export default Shop;