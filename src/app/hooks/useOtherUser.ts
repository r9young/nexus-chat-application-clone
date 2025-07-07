import { useSession } from 'next-auth/react'; // it is prepared for the current user
import { useMemo } from 'react';
import { FullConversationType } from '../types'; // it is prepared for the other users
import { User } from '@prisma/client';

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    // conversation.users is the part of the FullConversationType interface. 
    const otherUser = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );

    return otherUser[0];
  }, [session?.data?.user?.email, conversation.users]);

  return otherUser;
};




export default useOtherUser;


// This code does not fetch data from the server. Instead, it:

// 🔹 Extracts the "other" user from the conversation.users array that is already passed into the component as a prop or fetched elsewhere.
// 🔹 It uses the current user's email (from next-auth session) to identify and remove that user from the list.