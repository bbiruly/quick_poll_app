import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/poll-home/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          {/* Protected Route - Dashboard and Nested Routes */}
          <Route path="/home" element={<Dashboard />}>
            {/* Nested Routes for Dashboard */}
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
