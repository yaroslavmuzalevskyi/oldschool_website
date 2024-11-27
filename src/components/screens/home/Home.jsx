import Hero from "./components/hero/Hero.jsx";
import Collection from "./components/collection/Collection.jsx";
import Shop from "./components/assortment/Assortment.jsx";
import Info from "./components/info/Info.jsx";

function Home() {
    return (
      <>
        <Hero />
        <Collection />
        <Shop />
        <Info /> 
      </>
    );
}
export default Home;