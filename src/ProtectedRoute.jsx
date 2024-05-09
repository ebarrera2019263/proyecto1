import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const userRole = localStorage.getItem('userRole'); // Obtenemos el rol desde el almacenamiento local

  if (userRole !== 'admin') {
    // Si no es admin, redirigir a la página de login
    return <Navigate to="/login" replace />;
  }

  return children; // Si es admin, renderizar los children que en este caso sería el componente Home
}
