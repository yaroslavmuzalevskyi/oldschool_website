import styles from "./sizes.module.scss"

export default function Sizes({ className=""}){

    return (
      <div className={styles[className]}>
        <p>sizes</p>
        <ul>
          <li>
            <a href="">M</a>
          </li>
          <li>
            <a href="">L</a>
          </li>
          <li>
            <a href="">XL</a>
          </li>
          <li>
            <a href="">XXL</a>
          </li>
        </ul>
      </div>
    );

}