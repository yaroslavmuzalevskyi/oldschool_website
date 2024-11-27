import React, { useState } from "react";
import styles from "./block1.module.scss";
import Card from "../../../widgets/card/Card.jsx";

export default function Block({ source1, source2, source3 }) {
  const [cards, setCards] = useState([
    { id: 1, image: source1 },
    { id: 2, image: source2 },
    { id: 3, image: source3 },
  ]);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");

  const handleRightArrowClick = () => {
    if (animating) return;

    setAnimating(true);
    setDirection("right");
    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const lastCard = newCards.pop();
        newCards.unshift(lastCard);
        return newCards;
      });
      setAnimating(false);
    }, 500); // Duration of the animation
  };

  const handleLeftArrowClick = () => {
    if (animating) return;

    setAnimating(true);
    setDirection("left");
    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift();
        newCards.push(firstCard);
        return newCards;
      });
      setAnimating(false);
    }, 500); // Duration of the animation
  };

  return (
    <div className={styles.container_bg}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="../../../../../public/images/shop/left_arrow.png"
            alt=""
            onClick={handleLeftArrowClick}
          />
          <h1>Sewen collection</h1>
          <img
            src="../../../../../public/images/shop/right_arrow.png"
            alt=""
            onClick={handleRightArrowClick}
          />
        </div>

        <div
          className={`${styles.cards} ${animating ? styles.animating : ""} ${
            styles[direction]
          }`}
        >
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <Card image={card.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
