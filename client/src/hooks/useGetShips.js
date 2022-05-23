import { useEffect, useState } from "react"

const ships = [
	{
		name: "carrier",
		length: 4,
		sunk: false,
	},
	{
		name: "battleship",
		length: 3,
		sunk: false,
	},
	{
		name: "cruiser",
		length: 2,
		sunk: false,
	},
	{
		name: "destroyer",
		length: 2,
		sunk: false,
	},
]

const useGetShips = ({ gameBoard }) => {
	const [battleboard, setBattleboard] = useState(gameBoard)
	const [startingX, setStartingX] = useState()
	const [startingY, setStartingY] = useState()
	const [shipLength, setShipLength] = useState()
	const [occupied, setOccupied] = useState(false)

	// generate starting position
	const generateStartingIndex = () => {
		return Math.floor(Math.random() * 10)
	}

	const placeAllShips = () => {
		ships.forEach((ship) => placeShip(ship))
		console.table(battleboard)
	}

	const placeShip = (ship) => {
		setStartingX(generateStartingIndex())
		setStartingY(generateStartingIndex())
		setShipLength(ship.length)
		// const currentShipSpaceY = startingY + ship.length

		// check if no ship in startingposition and inside board
		if (
			battleboard[startingY][startingX] === null &&
			10 > startingX + shipLength
		) {
			// check if any of the ships parts is interfearing with another ship
			for (let i = startingX; i <= startingX + shipLength; i++) {
				// if you find ship anywhere, change occupied
				if (battleboard[startingY][i] !== null) {
					setOccupied(true)
				}
			}

			// if no ship-part found, place ship there
			if (!occupied) {
				return setBattleboard(
					[startingY].fill(ship, startingX, startingX + shipLength)
				)
			}
		}
		// if any of the criterias fail, call function again to get new coordinates
		placeShip(ship)
	}

	useEffect(() => {
		placeAllShips()
	}, [])

	return battleboard
}

export default useGetShips
