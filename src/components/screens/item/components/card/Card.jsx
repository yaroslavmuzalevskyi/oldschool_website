import styles from "./card.module.scss";


function Card(){


    return(

        <div className={styles.container}>
            <div className={styles.container_img}>
                <img alt="hoodie" src="../../../../../../public/images/item/hoodie1.png" />
            </div>
        </div>

    )
}

export default Card;