import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import styles from './layout.module.scss'

const Layout = ({children}) => {
    return (
      <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </div>
    );
}

export default Layout