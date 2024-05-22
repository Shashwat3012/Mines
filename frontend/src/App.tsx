import "./styles/App.css";
import Board from "./Board";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <div className="App bg-black ">
        <h1 className="text-white text-4xl">Mines</h1>
        <div className="flex flex-row">
          <SideBar />
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
