import "./styles/App.css";
// import Board from "./Board";

function App() {
  return (
    <>
      <div className="App bg-black h-screen w-2/12   text-white border-">
        
        <form action="" className="flex flex-col gap-10 pl-10">
            <div className="flex flex-col">
            <label htmlFor="" className="text-left">Bet Amount</label>
            <input type="number" className="text-gray-600" placeholder="Enter bet amount here"/>
            </div>
            <div className="flex flex-col">
            <label htmlFor="" className="text-left">Mines</label>
            <select name="" id="" className="text-gray-600">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25   </option>
            </select>
            {/* <input type="" placeholder="Enter bet amount here"/> */}
            </div>
            <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
  Place Bet
</button>
        </form>
      </div>
    </>
  );
}

export default App;
