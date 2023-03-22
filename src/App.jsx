import Content from "./components/content";
import Footer from "./components/footer";
import ItemDetails from "./components/itemDetails";
import HamburgerMenu from "./components/hamburgerMenu";
import Header from "./components/header";
import Hero from "./components/hero";

import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 70);
    });
  }, []);

  const [getItemDetails, setGetItemDetails] = useState({
    itemData: {},
    isVisible: false,
  });
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  return (
    <div className="App">
      {getItemDetails.isVisible ? (
        <>
          <Header scroll={scroll} setIsHamburgerMenu={setIsHamburgerMenu} />
          {isHamburgerMenu && (
            <HamburgerMenu setIsHamburgerMenu={setIsHamburgerMenu} />
          )}
          <ItemDetails
            data={getItemDetails.itemData}
            setGetItemDetails={setGetItemDetails}
          />
        </>
      ) : (
        <>
          <Header scroll={scroll} setIsHamburgerMenu={setIsHamburgerMenu} />

          <HamburgerMenu
            setIsHamburgerMenu={setIsHamburgerMenu}
            isHamburgerMenu={isHamburgerMenu}
          />

          <Hero />
          <Content setGetItemDetails={setGetItemDetails} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
