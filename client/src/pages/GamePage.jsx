import MyGameBoard from "../components/MyGameBoard";
import OpponentGameBoard from "../components/OpponentGameBoard";

export default function GamePage() {
  return (
    <div className="gameboard-container">
      <h1 className="gameboard-title">Battleships 🚢💣</h1>
      <MyGameBoard />
      <OpponentGameBoard />
    </div>
  );
}
