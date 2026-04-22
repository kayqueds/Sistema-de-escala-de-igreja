import './LeaderDashboard.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/common/sidebar/Sidebar';

export default function LeaderDashboard() {
  return (
    <div className="leader-dashboard">
      <Sidebar />
      <main className="leader-main">
        <Outlet />
      </main>
    </div>
  );
}
