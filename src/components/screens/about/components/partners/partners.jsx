import styles from "./partners.module.scss";
import Card from "./components/card/card.jsx";

export default function Partners() {
  return (
    <div className={styles.container_bg}>
      <div className={styles.container}>
        <h1>Our Partners</h1>

        <div className={styles.container_cards}>
          <Card source="../../../../../../public//images/about/partner.png" />
          <Card source="../../../../../../public//images/about/partner.png" />
          <Card source="../../../../../../public//images/about/partner.png" />
          <Card source="../../../../../../public//images/about/partner.png" />
          <Card source="../../../../../../public//images/about/partner.png" />
          <Card source="../../../../../../public//images/about/partner.png" />
        </div>
      </div>
    </div>
  );
}
