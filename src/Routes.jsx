import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import Login from "./Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;