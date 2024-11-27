import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/screens/home/Home"
import Shop from "./components/screens/shop/Shop.jsx";
import Contact from "./components/screens/contact/Contact.jsx"
import About from "./components/screens/about/About.jsx";
import Item from "./components/screens/item/Item.jsx";
import './assets/styles/styles.scss'

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
