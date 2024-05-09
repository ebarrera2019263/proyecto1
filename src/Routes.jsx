import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./home";
import Login from "./Login";
import Register from "./register";
import Quickview from "./Quickview"

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
