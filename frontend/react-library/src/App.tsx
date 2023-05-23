import React from "react";

import "./App.css";

import Navbar from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchBookPage } from "./layouts/SearchBookPage/SearchBookPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBookPage />
      <Footer />
    </div>
  );
}

export default App;
