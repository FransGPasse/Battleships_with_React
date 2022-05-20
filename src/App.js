import logo from "./logo.svg"
import "./App.css"
import { placeAllShips } from "./Ships"

const ships = [
	{
		name: "carrier",
		length: 4,
		sunk: false
	},
	{
		name: "battleship",
		length: 3,
		sunk: false
	},
	{
		name: "cruiser",
		length: 2,
		sunk: false
	},
	{
		name: "destroyer",
		length: 2,
		sunk: false
	},
]

function App() {
	placeAllShips(ships)

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
