'use client';

import Sidebar from './Sidebar';
import '../../styles/dashboard.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
