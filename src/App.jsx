import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
      </Routes>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
