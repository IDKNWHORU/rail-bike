import { useState } from "react";
import MenuBar from "./component/MenuBar";
import Calculator from "./screen/Calculator";
import Editor from "./screen/Editor";
import Index from "./screen/Index";
import Item from "./screen/Item";
import Printer from "./screen/Printer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <MenuBar></MenuBar>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Item" element={<Item />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="Editor" element={<Editor />} />
            <Route path="Printer" element={<Printer />} />
          </Routes>
        </Router>
      </main >
    </div >
  );
}

export default App;
