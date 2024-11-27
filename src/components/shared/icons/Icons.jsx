import styles from "./icons.module.scss"

const Icons = () => {
  return (

    <div className={styles.icons_container}>

      <i className={`fa fa-facebook-square ${styles.fa}`} aria-hidden="true"></i>
      <i className={`fa fa-twitter-square ${styles.fa}`} aria-hidden="true"></i>
      <i className={`fa fa-github-square ${styles.fa}`} aria-hidden="true"></i>
      <i className={`fa fa-youtube-square ${styles.fa}`} aria-hidden="true"></i>

    </div>

  )

};   

export default Icons;