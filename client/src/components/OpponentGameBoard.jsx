import React from "react";

export default function OpponentGameBoard() {
  const battleships = [
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ];

  console.log(battleships);

  return (
    <>
      <div className="opponent-gameboard">
        {React.Children.toArray(
          battleships.map((ship) => (
            <div className="row">
              {React.Children.toArray(
                ship.map((item) => <div className="opponent-box">{item}</div>)
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
