import InputForm from "./component/InputForm";
import MenuBar from "./component/MenuBar";


function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <main>
        <div>
          <h1>
            <span>전표 입력 폼</span>
          </h1>
          <InputForm></InputForm>
        </div>
      </main >
    </div >
  );
}

export default App;
