import MenuBar from "./component/MenuBar";
import Calculator from "./screen/Calculator";


function App() {
  return (
    <div className="App">
      <header>
        <MenuBar></MenuBar>
      </header>
      <main>
        <Calculator></Calculator>
      </main >
    </div >
  );
}

export default App;
