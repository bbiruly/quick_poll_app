import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Home from "./pages/poll-home/Home";

// Create a Protected Route component
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

 

  // Check if the user is authenticated
  if (!user.isAuthenticated) {
    // If not authenticated, redirect to the login page
    window.location.href = "/login";
    return null;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          

          {/* Protected Route - Dashboard and Nested Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes for Dashboard */}
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
