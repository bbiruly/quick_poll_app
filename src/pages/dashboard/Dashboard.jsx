import Sidebar from '../../components/ui/Sidebar'
import { links } from '../../constant/constant'
import logo from "../../assets/react.svg";

import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR - Fixed to the left */}
      <div className="md:w-64 md:fixed inset-y-0 left-0 bg-white shadow-lg">
        <Sidebar
          links={links}
          logo={logo}
          footer={<p className="text-sm text-gray-400">© 2024 Quick Polling App</p>}
        />
      </div>

      {/* MAIN CONTENT - Push right with margin */}
      <main className="flex-1 md:ml-64 p-4 overflow-y-auto">
        {/* Nested route content will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
