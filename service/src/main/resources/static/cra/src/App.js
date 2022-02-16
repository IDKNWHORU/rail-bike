import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./component/MenuBar";
import Calculator from "./screen/Calculator";
import Editor from "./screen/Editor";
import Index from "./screen/Index";
import Item from "./screen/Item";
import Printer from "./screen/Printer";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <MenuBar></MenuBar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Item" element={<Item />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="Editor" element={<Editor />} />
            <Route path="Printer" element={<Printer />} />
          </Routes>
        </main >
      </Router>
    </div >
  );
}

export default App;
