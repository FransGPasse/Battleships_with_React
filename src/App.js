import logo from "./logo.svg"
import "./App.css"
import useGetShips from "../client/src/hooks/useGetShips"

const battleboard = [
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

function App() {
	const filledBoard = useGetShips(battleboard)
	console.table(filledBoard)

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
