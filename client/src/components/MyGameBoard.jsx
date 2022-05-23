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
      <div className="my-gameboard">
        {React.Children.toArray(
          battleships.map((ship) => (
            <div className="row">
              {React.Children.toArray(
                ship.map((item) => <div className="box">{item}</div>)
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
