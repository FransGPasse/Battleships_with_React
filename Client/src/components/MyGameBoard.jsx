import React from "react";

export default function MyGameBoard() {
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
      <div className="gameboard my-gameboard">
        {React.Children.toArray(
          battleships.map((ship) => (
            <div className="row">
              {React.Children.toArray(
                ship.map((item) => <div className="box my-box">{item}</div>)
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
