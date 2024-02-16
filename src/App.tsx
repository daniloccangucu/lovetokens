import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import "./styles/styles.scss";
import LoveTokens from "./components/lovearchive/LoveArchive";
import SingleLoveToken from "./components/singlelovetoken/SingleLoveToken";

const loveToken = {
  "_id": {
    "$oid": "65cb832a3ef6388c7b78596c"
  },
  "labels": [
    "Admiration",
    "Gratitude"
  ],
  "phrase": "surprise me with a handwritten note expressing your admiration for the little things I do every day.",
  "creationDate": "2024-02-13T11:30:00.000Z",
  "createdBy": {
    "userName": "Tove Nieminen",
    "userId": "116e8910-a7b3-4bc7-bcc0-15e7794309b4"
  },
  "tokenNumber": 7
}

function App() {
  return <div className="App">
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<LoveTokens />} />
        <Route path="/single" element={<SingleLoveToken {...loveToken} />} /> 
      </Routes>
    </main>
  </div>;
}

export default App;
