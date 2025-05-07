"use client";
import { useUser, RedirectToSignIn, useClerk } from "@clerk/nextjs";
import { useState, useEffect } from "react";


// Interfaces
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

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [quizSchedule, setQuizSchedule] = useState<Quiz[]>([]);

  const [loadingNotifications, setLoadingNotifications] = useState(true);
  const [loadingTeam, setLoadingTeam] = useState(true);
  const [loadingQuiz, setLoadingQuiz] = useState(true);

  // Define async functions BEFORE useEffect
  const fetchNotifications = async () => {
    try {
      const mockNotifications: Notification[] = [
        { id: 1, message: "You have a new message" },
        { id: 2, message: "Your profile was updated" },
      ];
      setNotifications(mockNotifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoadingNotifications(false);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const mockTeam: TeamMember[] = [
        { id: 1, name: "John Doe", role: "Developer" },
        { id: 2, name: "Jane Smith", role: "Designer" },
      ];
      setTeamMembers(mockTeam);
    } catch (error) {
      console.error("Error fetching team data:", error);
    } finally {
      setLoadingTeam(false);
    }
  };

  const fetchQuizSchedule = async () => {
    try {
      const mockSchedule: Quiz[] = [
        { id: 1, date: "2025-05-01", quizName: "Math Quiz" },
        { id: 2, date: "2025-05-10", quizName: "Science Quiz" },
      ];
      setQuizSchedule(mockSchedule);
    } catch (error) {
      console.error("Error fetching quiz schedule:", error);
    } finally {
      setLoadingQuiz(false);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      fetchNotifications();
      fetchTeamMembers();
      fetchQuizSchedule();
    }
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <RedirectToSignIn />;

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/login" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Your Dashboard, {user.firstName}!</h1>
      <p>Here's your personalized dashboard content.</p>

      <div>
        <h2>Your Profile</h2>
        <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <a href="/profile">Edit Profile</a>
      </div>

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

      <div>
        <h2>Help & FAQ</h2>
        <ul>
          <li>Q: How can I update my profile?</li>
          <li>A: Click on "Edit Profile" above.</li>
          <li>Q: How do I schedule a quiz?</li>
          <li>A: Contact your admin to schedule it.</li>
          <li>Q: How do I manage my team?</li>
          <li>A: Use the "Team Management" section.</li>
        </ul>
      </div>

      <div>
        <button
          onClick={handleSignOut}
          style={{
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
