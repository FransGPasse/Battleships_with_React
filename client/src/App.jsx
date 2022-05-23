import { Routes, Route } from "react-router-dom"
import "./assets/App.scss"
import JoinPage from "./pages/JoinPage"
/* import ConnectedPage from "./pages/ConnectedPage"; */
// import { useEffect } from "react"
import useGetShips from "../src/hooks/useGetShips"
import { useEffect } from "react"

function App() {
	const myBoard = useGetShips()
	// const opponentBoard = useGetShips()

	useEffect(() => {
		myBoard.placeAllShips()
	}, [])

	console.table(myBoard.battleboard)

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<JoinPage />} />
				{/*         <Route path="/battleships" element={<ConnectedPage />} /> */}
			</Routes>
		</div>
	)
}

export default App
