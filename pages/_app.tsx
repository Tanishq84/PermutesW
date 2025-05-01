import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';
import LoginPage from '../components/bid_build/LoginPage'; // Path to your LoginPage

// Clerk's frontend API should be set as an environment variable (NEXT_PUBLIC_CLERK_FRONTEND_API)
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider>
      {/* Use the ClerkProvider for your app, ensuring Clerk context is provided for all pages */}
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
