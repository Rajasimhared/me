import React from "react";
import { DockData } from "./utils/Constants";
import Dock from "./components/Dock";
import DetailsBar from "./components/DetailsBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="portfolio-image"></div>
        <DetailsBar />
      </div>
      <Dock data={DockData} />
    </>
  );
}

export default App;
