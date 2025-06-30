// src/app/users/layout.tsx
import { Metadata } from 'next';
import Sidebar from '../../app/(site)/components/sidebar/Sidebar'

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
        {/* <UserList users={users} /> */}
        {children}
      </div>
    </Sidebar>
  );
}
