import MyGameBoard from "../components/MyGameBoard";
import OpponentGameBoard from "../components/OpponentGameBoard";

export default function GamePage() {
  return (
    <>
      <h1 className="title">Battleships 🚢💣</h1>
      <div className="gamepage-container">
        <MyGameBoard />
        <OpponentGameBoard />
      </div>
    </>
  );
}
