import CardList from "./components/cardList";
import Content from "./components/content";
import Filter from "./components/filter";
import Header from "./components/header";
import Hero from "./components/hero";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
