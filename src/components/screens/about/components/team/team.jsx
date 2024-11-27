import styles from "./team.module.scss";
import Card from "./components/card/card.jsx";

export default function Team(){

    return (
      <div className={styles.container_bg}>
        <div className={styles.container}>
          <h1>Our Team</h1>
          <div className={styles.card_container}>
            <Card
              source={"../../../../../../../../public/images/about/team.png"}
            />
            <Card
              source={"../../../../../../../../public/images/about/team.png"}
            />
            <Card
              source={"../../../../../../../../public/images/about/team.png"}
            />
          </div>
        </div>
      </div>
    );   

}