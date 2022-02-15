import { useState } from "react";
import MenuBar from "./component/MenuBar";
import Calculator from "./screen/Calculator";
import Editor from "./screen/Editor";
import Index from "./screen/Index";
import Printer from "./screen/Printer";


function App() {
  const [activate, setActivate] = useState("index");
  return (
    <div className="App">
      <header>
        <MenuBar setActivate={setActivate}></MenuBar>
      </header>
      <main>
        {activate === 'index' ? <Index></Index> : ''}
        {activate === 'Calculator' ? <Calculator></Calculator> : ''}
        {activate === 'Editor' ? <Editor></Editor> : ''}
        {activate === 'Printer' ? <Printer></Printer> : ''}
      </main >
    </div >
  );
}

export default App;
