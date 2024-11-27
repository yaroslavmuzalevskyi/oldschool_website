import styles from "./card.module.scss";

const Card = ({image}) => {

    return(

        <div className={styles.card}>

            <div className={styles.card_img}>

                <img src={image} alt="T-shirt" />

            </div>

            <div className={styles.card_txt}>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eius delectus sed doloremque. Ratione culpa impedit fugiat distinctio consectetur officia sunt unde, accusamus aliquid molestias eligendi beatae et itaque ea.</p>

            </div>

        </div>

    )

}

export default Card;