import Content from "./component/Content";
import MenuBar from "./component/MenuBar";
import SideBar from "./component/SideBar";


function App() {
  return (
    <div className="App">
      <header>
        <MenuBar></MenuBar>
      </header>
      <main>
        <SideBar title="전표 입력 폼"></SideBar>
        <Content title="전표 목록"></Content>
      </main >
    </div >
  );
}

export default App;
