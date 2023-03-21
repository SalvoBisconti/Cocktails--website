import Content from "./components/content";
import Footer from "./components/footer";
import ItemDetails from "./components/itemDetails";
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
  console.log(getItemDetails);
  return (
    <div className="App">
      {getItemDetails.isVisible ? (
        <>
          <Header scroll={scroll} />
          <ItemDetails
            data={getItemDetails.itemData}
            setGetItemDetails={setGetItemDetails}
          />
        </>
      ) : (
        <>
          <Header scroll={scroll} />
          <Hero />
          <Content setGetItemDetails={setGetItemDetails} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
