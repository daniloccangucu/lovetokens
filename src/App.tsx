import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import "./styles/styles.scss";
import LoveTokens from "./components/lovearchive/LoveArchive";
import SingleLoveToken from "./components/singlelovetoken/SingleLoveToken";

function App() {
  return <div className="App">
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<LoveTokens />} />
        <Route path="/archive/:tokenNumber" element={<SingleLoveToken />} />
      </Routes>
    </main>
  </div>;
}

export default App;
