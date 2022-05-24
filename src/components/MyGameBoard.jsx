import React from "react"

export default function MyGameBoard({ myBoard }) {
	/* const battleships = [
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

  console.log(battleships); */

	return (
		<>
			<div className="gameboard my-gameboard">
				{React.Children.toArray(
					myBoard.map((boxitem) => (
						<div className="box my-box">{boxitem}</div>
						// <div className="row">
						// 	{React.Children.toArray(
						// 		ship.map((item) => (
						// 			<div className="box my-box">{item}</div>
						// 		))
						// 	)}
						// </div>
					))
				)}
			</div>
		</>
	)
}
