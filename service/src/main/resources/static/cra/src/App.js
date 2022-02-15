import { useState } from "react";
import MenuBar from "./component/MenuBar";
import Calculator from "./screen/Calculator";
import Index from "./screen/Index";


function App() {
  const [activate, setActivate] = useState("index");
  return (
    <div className="App">
      <header>
        <MenuBar setActivate={setActivate}></MenuBar>
      </header>
      <main>
        {activate === 'Calculator' ? <Calculator></Calculator> : <Index></Index>}
      </main >
    </div >
  );
}

export default App;
