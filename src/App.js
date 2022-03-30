/** @format */

import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Section from "./Section.js";
import Sec2 from "./Sec2";
import Footer from "./Footer";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Body />
      <Section />
      <Sec2 />
      <Footer />
    </div>
  );
}

export default App;
