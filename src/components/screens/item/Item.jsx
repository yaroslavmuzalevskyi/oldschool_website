import styles from "./item.module.scss";
import Card from "./components/card/Card.jsx";
import Sizes from "../../widgets/sizes/sizes.jsx";
import Purschase from "../../widgets/purschase/purschase.jsx";
import Descripion from "./components/description/description.jsx";

function Item({source}){

    return (
      <>
        <div className={styles.commodity}>
          <div>
            <Card />
          </div>
          <div className={styles.commodity_right}>
            <div className={styles.commodity_right_header}>
              <h1>OLD SCHOOL Hoodie</h1>
            </div>
            <div className={styles.commodity_right_desc}>
              <p>
                Sewen designer's clothing line is a one-of-a-kind, handcrafted
                fashion that showcases creativity and artistry. The designer's
                unique vision and aesthetic are evident in each piece, from bold
                designs to high-quality fabrics.
              </p>
              <Sizes className="card_sizes_list_white" />
              <Purschase
                className="card_price_white"
                className2="button_card_white"
              />
            </div>
          </div>
        </div>
        <Descripion />
      </>
    );

}
export default Item;