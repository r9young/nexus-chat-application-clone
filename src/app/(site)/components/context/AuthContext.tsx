// Original error because your AuthForm.tsx component attempted to use useSession() without a surrounding <SessionProvider>. 

'use client';
import { SessionProvider } from 'next-auth/react';

interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}


