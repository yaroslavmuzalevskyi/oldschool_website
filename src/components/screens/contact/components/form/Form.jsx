import { useState } from "react";
import styles from "./form.module.scss";
import Button from "../../../../shared/button/Button.jsx";

function Form() {

  const [ backgroundSize, setBackgroundSize] = useState("100%");
  const [ transitionTime, setTransitionTime] = useState("0.2s");

  const handleMouseOver = () => {
    setBackgroundSize("110%");
    setTransitionTime("0.3s");
  };

  const handleMouseOut = () => {
    setBackgroundSize("100%");
    setTransitionTime("0.3s");
  };

  return (
    <div
      className={styles.container_bg}
      style={{
        backgroundSize: backgroundSize,
        transition: transitionTime,
      }}
    >
      <div className={styles.container}>
        <a
          href="https://www.google.com/maps/place/%D0%AD%D1%88-%D1%81%D1%8E%D1%80-%D0%90%D0%BB%D1%8C%D0%B7%D0%B5%D1%82%D1%82/@49.4891812,5.9322259,13z/data=!3m1!4b1!4m6!3m5!1s0x4795351c6ea596c9:0x1932d64898d8b067!8m2!3d49.5024342!4d5.9722212!16zL20vMDFrajc1?entry=ttu"
          target="_blank"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={styles.left}
        >
          <h1 className={styles.right_text}>
            Get Contact <br />
            With Us
          </h1>
        </a>

        <div className={styles.right}>
          <form action="" className={styles.form}>
            <div className={styles.form_input}>
              <input type="text" placeholder="Your name..." />
              <input type="email" placeholder="Your Email..." />
              <textarea placeholder="Message..."></textarea>
              <div className={styles.form_button}>
                <Button className="button_form" text="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  document.querySelector(".left").addEventListener("mouseover", function () {
    document.querySelector(".container_bg").style.backgroundSize = "110%";
  });

  document.querySelector(".left").addEventListener("mouseout", function () {
    document.querySelector(".container_bg").style.backgroundSize = "cover";
  });
}
export default Form;
