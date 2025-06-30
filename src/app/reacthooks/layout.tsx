// src/app/reacthooks/layout.tsx
import { Metadata } from 'next';
import Sidebar from '../(site)/components/sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'React Hooks | Nexus - Your Ultimate Chat Experience',
};

export default function ReactHooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
