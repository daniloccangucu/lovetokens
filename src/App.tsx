import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import "./styles/styles.scss";


function App() {
  return <div className="App">
    <NavBar />
    <main>
      <Home />
    </main>
  </div>;
}

export default App;
