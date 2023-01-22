import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./main.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ErroPage from "./pages/ErroPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
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
