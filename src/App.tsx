import { Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import "./styles/styles.scss";
import LoveTokens from "./pages/LoveArchive";
import SingleLoveToken from "./pages/SingleLoveToken";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";
import Login from "./pages/Login";

function App() {
  return <div className="App">
    <ToastContainer autoClose={4000} position="top-center" transition={Slide} />
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<LoveTokens />} />
        <Route path="/archive/:tokenNumber" element={<SingleLoveToken />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/authenticate" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  </div>;
}

export default App;
