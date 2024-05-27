import "./styles/App.css";
import Board from "./Board";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  
    const [balance, setBalance] = useState();
    useEffect(() =>{
      const getBalanceFromServer = async (balance=0)  => {
      setLoading(true);
      try {
        
        const res = await fetch('http://localhost:3000/balance');      
        const data = await res.json();
        console.log(data)
        setBalance(data);
      } catch (error) {
        console.log("Error in getBAlanceFromServer function: " +error)
      }finally{
        setLoading(false);
      }
    }   
    getBalanceFromServer(balance);
    }, [])
  
  console.log(balance)
  return (
    <>
      <div className="App bg-black ">
        <div className="text-white flex flex-row justify-center w-full ">
          <h1 className="text-4xl">Mines</h1>
          {!loading && <h3 className="justif self-center ">Your balance: {balance}</h3>}
        </div>
        <div className="flex flex-row">
          <SideBar />
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
