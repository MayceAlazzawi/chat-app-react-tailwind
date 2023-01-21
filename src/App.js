import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErroPage from "./pages/ErroPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Register />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
    </Router>
    // <Register />

    // <Login />
  );
}

export default App;
