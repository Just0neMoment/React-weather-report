import React from "react";

import "./App.css";

import Header from "./header/Header.js";
import Card from "./card/Card.js";
import Footer from "./footer/Footer.js"

function App() {
  return (
    <div className="App">

      <Header />

      <div className="main">
        <Card />
      </div>

      <Footer />

    </div>
  );
}

export default App;
