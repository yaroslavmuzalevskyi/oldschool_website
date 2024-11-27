import styles from "./description.module.scss";

export default function Description(){

    return (
      <div className={styles.container_bg}>
        <div className={styles.container}>
          <h1>Description</h1>
          <p>
            Sewen designer's clothing line is a one-of-a-kind, handcrafted
            fashion that showcases creativity and artistry. The designer's
            unique vision and aesthetic are evident in each piece, from bold
            designs to high-quality fabrics
          </p>
          <div className={styles.desc_list}>
            <p>Size — The model is 178cm/5'10" and wears a size 2</p>
            <p>Fit — Relaxed fit</p>
            <p>
              Composition — Shell: Cotton 100%, Pocket lining: Polyester 74%,
              Cotton 26%
            </p>
            <p>
              Additional material information — Shell: Recycled cotton 20%,
              Lining: Recycled polyester 74%, Recycled cotton 13%
            </p>
          </div>
        </div>
      </div>
    );

}