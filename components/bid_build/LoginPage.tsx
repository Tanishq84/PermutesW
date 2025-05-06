'use client'; // ✅ Ensure this is a client component

import { SignIn } from '@clerk/nextjs';
import '../../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <SignIn
        routing="path"
        path="/login"
        signUpUrl="/signup"
      />
    </div>
  );
};

export default LoginPage;
