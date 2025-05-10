'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import {
  FiHome, FiUser, FiUsers, FiSettings, FiLogOut, FiEdit3, FiMenu, FiLoader
} from 'react-icons/fi';
import { useState } from 'react';
import "../../styles/dashboard.css";

const Sidebar = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navItems = [
    { name: 'Home', href: '/dashboard', icon: <FiHome /> },
    { name: 'Profile', href: '/dashboard/profile', icon: <FiUser /> },
    { name: 'Team', href: '/dashboard/team', icon: <FiUsers /> },
    { name: 'Quizzes', href: '/dashboard/quizzes', icon: <FiEdit3 /> },
    { name: 'Settings', href: '/dashboard/settings', icon: <FiSettings /> },
  ];

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await signOut({ redirectUrl: '/login' });
  };

  return (
    <>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={24} />
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1>Permutes</h1>
        </div>

        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.href} className={pathname === item.href ? 'active' : ''}>
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <button onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? (
              <FiLoader className="spin-icon" />
            ) : (
              <FiLogOut style={{ marginRight: '8px' }} />
            )}
            {isLoggingOut ? 'Logging out...' : 'Sign Out'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
