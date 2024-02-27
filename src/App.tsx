import { Navigate, Route, Routes } from "react-router-dom";
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
import AppreciationAtelier from "./pages/AppreciationAtelier";
import { getUserFromLocalStorage } from "./utils/storeUtils";

function App() {
  const user = getUserFromLocalStorage();

  return <div className="App">
    <ToastContainer autoClose={4000} position="top-center" transition={Slide} />
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<LoveTokens />} />
        <Route path="/archive/:tokenNumber" element={<SingleLoveToken />} />
        <Route path="/register" element={user ? <Navigate to="/profile" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/logout" element={user ? <Logout /> : <Navigate to="/profile" />} />
        <Route path="/authenticate" element={user ? <Auth /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/atelier" element={user ? <AppreciationAtelier /> : <Navigate to="/login" />} />
      </Routes>
    </main>
  </div>;
}

export default App;
