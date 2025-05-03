import { useUser, RedirectToSignIn, useClerk } from '@clerk/nextjs';

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk(); // Clerk's sign-out function

  // While Clerk data is loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Redirect to sign-in if the user is not authenticated
  if (!user) {
    return <RedirectToSignIn />;
  }

  // Handle sign out and redirect to login page
  const handleSignOut = async () => {
    await signOut({ redirectUrl: '/login' }); // Redirect to login page after sign-out
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Your Dashboard, {user.firstName}!</h1>
      <p>Here's your personalized dashboard content.</p>
      <div>
        <h2>Your Details</h2>
        <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
      </div>
      <div>
        <h2>Actions</h2>
        <ul>
          <li><a href="/profile">Edit Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          {/* Add other dashboard actions here */}
        </ul>
      </div>
      <div>
        <button onClick={handleSignOut} style={{ padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
