import styles from "./card.module.scss";

export default function Card({source}){

    return (
      <div className={styles.card}>
        <img
          src={source}
          alt="partner"
        />
        <p>Allan Underwood</p>
      </div>
    );

}