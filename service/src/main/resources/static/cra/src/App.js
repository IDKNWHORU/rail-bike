import MenuBar from "./component/MenuBar";
import SideBar from "./component/SideBar";


function App() {
  return (
    <div className="App">
      <header>
        <MenuBar></MenuBar>
      </header>
      <main>
        <SideBar></SideBar>
      </main >
    </div >
  );
}

export default App;
