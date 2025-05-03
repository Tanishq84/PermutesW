import { useUser, RedirectToSignIn, useClerk } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import '../../styles/dashboard.css';

// Interfaces for the state
interface Notification {
  id: number;
  message: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

interface Quiz {
  id: number;
  date: string;
  quizName: string;
}

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  // States
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [quizSchedule, setQuizSchedule] = useState<Quiz[]>([]);

  // Loading state flags
  const [loadingNotifications, setLoadingNotifications] = useState(true);
  const [loadingTeam, setLoadingTeam] = useState(true);
  const [loadingQuiz, setLoadingQuiz] = useState(true);

  // useEffect runs only once when the component mounts
  useEffect(() => {
    if (isLoaded) {
      fetchNotifications();
      fetchTeamMembers();
      fetchQuizSchedule();
    }
  }, [isLoaded]); // Depend on isLoaded to ensure it's only run when data is loaded

  // While Clerk data is loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Redirect to sign-in if the user is not authenticated
  if (!user) {
    return <RedirectToSignIn />;
  }

  // Handle sign-out and redirect to login page
  const handleSignOut = async () => {
    await signOut({ redirectUrl: '/login' });
  };

  // Fetch notifications for the user (this can be replaced with your actual API call)
  const fetchNotifications = async () => {
    try {
      // Mock data (replace with actual API call)
      const mockNotifications: Notification[] = [
        { id: 1, message: 'You have a new message' },
        { id: 2, message: 'Your profile was updated' },
      ];
      setNotifications(mockNotifications);
      setLoadingNotifications(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setLoadingNotifications(false);
    }
  };

  // Fetch team data (replace with actual API call)
  const fetchTeamMembers = async () => {
    try {
      // Mock team data (replace with your actual API call)
      const mockTeam: TeamMember[] = [
        { id: 1, name: 'John Doe', role: 'Developer' },
        { id: 2, name: 'Jane Smith', role: 'Designer' },
      ];
      setTeamMembers(mockTeam);
      setLoadingTeam(false);
    } catch (error) {
      console.error('Error fetching team data:', error);
      setLoadingTeam(false);
    }
  };

  // Fetch quiz schedule (replace with actual API call)
  const fetchQuizSchedule = async () => {
    try {
      // Mock quiz schedule (replace with your actual API call)
      const mockSchedule: Quiz[] = [
        { id: 1, date: '2025-05-01', quizName: 'Math Quiz' },
        { id: 2, date: '2025-05-10', quizName: 'Science Quiz' },
      ];
      setQuizSchedule(mockSchedule);
      setLoadingQuiz(false);
    } catch (error) {
      console.error('Error fetching quiz schedule:', error);
      setLoadingQuiz(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Your Dashboard, {user.firstName}!</h1>
      <p>Here's your personalized dashboard content.</p>

      {/* User Profile Section */}
      <div>
        <h2>Your Profile</h2>
        <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <a href="/profile">Edit Profile</a>
      </div>

      {/* Team Management Section */}
      <div>
        <h2>Team Management</h2>
        {loadingTeam ? (
          <p>Loading team members...</p>
        ) : teamMembers.length > 0 ? (
          <ul>
            {teamMembers.map((member) => (
              <li key={member.id}>
                {member.name} - {member.role}
              </li>
            ))}
          </ul>
        ) : (
          <p>No team members found.</p>
        )}
      </div>

      {/* Quiz Scheduler Section */}
      <div>
        <h2>Quiz Scheduler</h2>
        {loadingQuiz ? (
          <p>Loading quiz schedule...</p>
        ) : quizSchedule.length > 0 ? (
          <ul>
            {quizSchedule.map((quiz) => (
              <li key={quiz.id}>
                {quiz.quizName} - Date: {quiz.date}
              </li>
            ))}
          </ul>
        ) : (
          <p>No quizzes scheduled yet.</p>
        )}
      </div>

      {/* Help Section / FAQ */}
      <div>
        <h2>Help & FAQ</h2>
        <p>Here are some frequently asked questions:</p>
        <ul>
          <li>Q: How can I update my profile?</li>
          <li>A: You can update your profile by clicking on the "Edit Profile" link above.</li>
          <li>Q: How do I schedule a quiz?</li>
          <li>A: Contact your administrator to schedule a quiz.</li>
          <li>Q: How can I manage my team?</li>
          <li>A: You can add and remove team members through the "Team Management" section.</li>
        </ul>
      </div>

      {/* Sign Out Button */}
      <div>
        <button
          onClick={handleSignOut}
          style={{
            padding: '10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
