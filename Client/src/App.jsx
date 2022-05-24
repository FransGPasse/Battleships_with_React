import { Routes, Route } from "react-router-dom";
import "./assets/App.scss";

import JoinPage from "./pages/JoinPage";
import GamePage from "./pages/GamePage";

import useGetShips from "../src/hooks/useGetShips";
import { useEffect } from "react";

function App() {
  const myBoard = useGetShips();

  useEffect(() => {
    myBoard.placeAllShips();
  }, []);

  console.table(myBoard.battleboard);
  console.table("Hej hej");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/battleships" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
