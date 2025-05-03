import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <SignIn
        routing="path"
        path="/login"
        signUpUrl="/signup"
        forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || '/dashboard'}
      />
    </div>
  );
};

export default LoginPage;
