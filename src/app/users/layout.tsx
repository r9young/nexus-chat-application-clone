// src/app/users/layout.tsx
import { Metadata } from 'next';
import Sidebar from '../../app/(site)/components/sidebar/Sidebar'
import UserList from './components/UserList';
import getUsers from '../actions/getUsers';

// tempoary use mockUser while primas has not been initialized
// Creating a mockUser for testing
// const mockUsers: User[] = [
//   {
//     id: '1',
//     name: 'Alice',
//     email: 'alice@example.com',
//     image: null,
//     emailVerified: null,
//     hashedPassword: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     conversationIds: [],
//     seenMessageIds: [],
//   },
//   {
//     id: '2',
//     name: 'Bob',
//     email: 'bob@example.com',
//     image: null,
//     emailVerified: null,
//     hashedPassword: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     conversationIds: [],
//     seenMessageIds: [],
//   },
// ];

export const metadata: Metadata = {
  title: 'All Users | Nexus - Your Ultimate Chat Experience',
};


export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const users = await getUsers();
    return (
    <Sidebar>
      <div className=" h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
}


// why do we need to use async and wait?