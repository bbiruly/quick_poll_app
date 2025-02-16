import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          {/* Protected Route - Dashboard and Nested Routes */}
          <Route path="/" element={<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
