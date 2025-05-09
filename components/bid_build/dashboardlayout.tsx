'use client';

import Sidebar from './Sidebar';
import CustomUserButton from './CustomUserButton';
import '../../styles/dashboard.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="user-button-container">
            <CustomUserButton />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
