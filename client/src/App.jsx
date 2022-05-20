import { Routes, Route } from "react-router-dom";
import "./assets/App.scss";
import JoinPage from "./pages/JoinPage";
/* import ConnectedPage from "./pages/ConnectedPage"; */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JoinPage />} />
        {/*         <Route path="/battleships" element={<ConnectedPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
