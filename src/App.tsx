import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import "./styles/styles.scss";
import LoveTokens from "./components/lovearchive/LoveArchive";


function App() {
  return <div className="App">
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<LoveTokens />} />
      </Routes>
    </main>
  </div>;
}

export default App;
