'use client';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';
import Image from 'next/image';

const ProfilePage = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <RedirectToSignIn />;

  return (
    <div className="dashboard-content max-w-3xl mx-auto p-6 bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-800">
      <h1 className="text-3xl font-bold text-white mb-6">Your Profile</h1>

      {/* Profile Info */}
      <div className="flex items-center gap-6 mb-6">
        <Image
          src={user.imageUrl}
          alt="User Avatar"
          width={80}
          height={80}
          className="rounded-full border border-gray-600"
        />
        <div>
          <h2 className="text-xl font-semibold text-cyan-400">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-400">{user.emailAddresses[0]?.emailAddress}</p>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm mb-1">Username</label>
          <input
            type="text"
            value={user.username || ''}
            disabled
            className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Email</label>
          <input
            type="email"
            value={user.emailAddresses[0]?.emailAddress}
            disabled
            className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
          />
        </div>
        <a
          href="/user/profile"
          className="inline-block mt-4 text-sm text-cyan-400 hover:underline"
        >
          Manage Account Settings
        </a>
      </div>

      {/* Danger Zone */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <h3 className="text-red-500 font-bold mb-2">Danger Zone</h3>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
