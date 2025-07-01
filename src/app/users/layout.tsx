// src/app/users/layout.tsx
import { Metadata } from 'next';
import Sidebar from '../../app/(site)/components/sidebar/Sidebar'
import UserList from './components/UserList';

// tempoary use mockUser while primas has not been initialized

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice',
    email: 'alice@example.com',
    image: null,
    emailVerified: null,
    hashedPassword: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    conversationIds: [],
    seenMessageIds: [],
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@example.com',
    image: null,
    emailVerified: null,
    hashedPassword: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    conversationIds: [],
    seenMessageIds: [],
  },
];

export const metadata: Metadata = {
  title: 'All Users | Nexus - Your Ultimate Chat Experience',
};


export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <Sidebar>
      <div className=" h-full">
        <UserList users={mockUsers} />
        {children}
      </div>
    </Sidebar>
  );
}
