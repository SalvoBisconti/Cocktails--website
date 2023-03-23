import Content from "./components/content";
import Footer from "./components/footer";
import ItemDetails from "./components/itemDetails";
import HamburgerMenu from "./components/hamburgerMenu";
import Header from "./components/header";
import Hero from "./components/hero";
import ModalAction from "./components/modalAction";
import Popup from "./components/popup";

import { takeDate } from "./utils/functions";
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
  const [isPrenotationModal, setIsPresentationModal] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [dataPrenotation, setDataPrenotation] = useState({
    name: "",
    email: "",
    date: "",
  });

  return (
    <div className="App">
      <Header
        scroll={scroll}
        setIsHamburgerMenu={setIsHamburgerMenu}
        setIsPresentationModal={setIsPresentationModal}
      />
      {isPrenotationModal && (
        <ModalAction
          setIsPresentationModal={setIsPresentationModal}
          setIsPopup={setIsPopup}
          dataPrenotation={dataPrenotation}
          setDataPrenotation={setDataPrenotation}
        />
      )}

      {isPopup && (
        <Popup>
          <h3 className="popupText">Table prenoteded</h3>
          <p className="popupText">
            Mr./mrs. {dataPrenotation.name} we expect you soon
          </p>
        </Popup>
      )}
      {console.log()}
      {getItemDetails.isVisible ? (
        <>
          {isHamburgerMenu && (
            <HamburgerMenu
              setIsHamburgerMenu={setIsHamburgerMenu}
              isHamburgerMenu={isHamburgerMenu}
              setIsPresentationModal={setIsPresentationModal}
            />
          )}
          <ItemDetails
            data={getItemDetails.itemData}
            setGetItemDetails={setGetItemDetails}
          />
        </>
      ) : (
        <>
          <HamburgerMenu
            setIsHamburgerMenu={setIsHamburgerMenu}
            isHamburgerMenu={isHamburgerMenu}
            setIsPresentationModal={setIsPresentationModal}
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
