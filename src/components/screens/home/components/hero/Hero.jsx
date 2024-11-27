import styles from "./hero.module.scss";
import Button from "../../../../shared/button/Button.jsx";
import Icons from "../../../../shared/icons/Icons.jsx";
import { Link } from "react-router-dom";

function Hero() {

    return (
      <div className={styles.container_bg}>
        <div className={styles.container}>
          <div className={styles.hero_left}>
            <img
              src="../../../../../public/images/main/man.png"
              alt="man.png"
            />
          </div>

          <div className={styles.hero_right}>
            <div className={styles.tape_text}>
              <img
                className={styles.tape}
                src="../../../../../public/images/main/tape.png"
                alt="tape.png"
              />
              <h1 className={styles.text}>
                NEW 2024 DESIGN <br />
                COLLECTION
              </h1>
            </div>

            <div>
              <p>
                Sewen designer's clothing line is a one-of-a-kind, handcrafted
                fashion that showcases creativity and artistry. The designer's
                unique vision and aesthetic are evident in each piece, from bold
                designs to high-quality fabrics.
              </p>
            </div>

            <div className={styles.button_icons}>
              <Button className="button_main" text="Show more" />
              <Icons />
            </div>
          </div>
        </div>
      </div>
    );

}

export default Hero;