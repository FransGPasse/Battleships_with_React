export const battleboard = [
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
]

// generate starting position
const generateStartingIndex = () => {
	return Math.floor(Math.random() * 10)
}

const placeShip = (ship) => {
	const startingX = generateStartingIndex()
	const startingY = generateStartingIndex()
	const shipLength = ship.length
	// const currentShipSpaceY = startingY + ship.length

	// check if no ship in startingposition and inside board
	if (
		battleboard[startingY][startingX] === null &&
		10 > startingX + shipLength
	) {
		let occupied = false

		// check if any of the ships parts is interfearing with another ship
		for (let i = startingX; i <= startingX + shipLength; i++) {
			// if you find ship anywhere, change occupied
			if (battleboard[startingY][i] !== null) {
				occupied = true
			}
		}

		// if no ship-part found, place ship there
		if (!occupied) {
			return battleboard[startingY].fill(
				ship,
				startingX,
				startingX + shipLength
			)
		}
	}
	// if any of the 
	placeShip(ship)
}

export const placeAllShips = (ships) => {
	ships.forEach((ship) => placeShip(ship))
	console.table(battleboard)
}
