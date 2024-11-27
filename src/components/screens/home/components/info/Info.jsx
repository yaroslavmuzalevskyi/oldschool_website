import styles from "./info.module.scss";

function Info() {

    return (
      <div className={styles.info_bg}>
        <div className={styles.info_container}>
          <div className={styles.info_image}>
            <img src="../../../../../../public/images/info/girl.png" alt="girl" />
          </div>

          <div className={styles.info_text}>
            <h4>Lorem ipsum dolor sit amet</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              quasi eaque qui modi, iste aliquid fugiat reiciendis culpa nemo
              corrupti neque, quod cum voluptates ipsa ab quos sint fuga autem!
            </p>

            <a href="">contact information</a>
          </div>
        </div>
      </div>
    );

}

export default Info;