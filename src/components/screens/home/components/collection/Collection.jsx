import styles from "./collection.module.scss";
import Card from "../../../../widgets/card/Card.jsx";
function Collection() {

    return (
      <div className={styles.container_bg}>
        <div className={styles.container}>
          <div className={styles.collection_top}>
            <p>Choose your style</p>
          </div>

          <div className={styles.collection_center}>
            <Card image="../../../../../public/images/collection/T-shirt1.png" />
            <Card image="../../../../../public/images/collection/T-shirt1.png" />
            <Card image="../../../../../public/images/collection/T-shirt1.png" />
          </div>

          <div className={styles.collection_bottom}>
            <p>OldSchool collection</p>
          </div>
        </div>
      </div>
    );

}

export default Collection;
