'use client';

import DashboardLayout from '../../components/bid_build/dashboardlayout';
import { useUser } from '@clerk/nextjs';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <DashboardLayout>
      <section className="welcome-section">
        <h1>Welcome back, {user?.firstName || 'User'} 👋</h1>
        <p>Here’s what’s happening in your dashboard today.</p>
      </section>

      <section className="stats-section">
        <div className="stat-card"><h3>4</h3><p>Team Members</p></div>
        <div className="stat-card"><h3>2</h3><p>Upcoming Quizzes</p></div>
        <div className="stat-card"><h3>5</h3><p>Completed Quizzes</p></div>
      </section>

      <section className="notifications-section">
        <h2>Notifications</h2>
        <ul>
          <li>Your quiz "Robotics 101" is scheduled for May 15th.</li>
          <li>Team registration deadline is May 12th.</li>
          <li>New announcement: Check out the updated design rules.</li>
        </ul>
      </section>
    </DashboardLayout>
  );
}
