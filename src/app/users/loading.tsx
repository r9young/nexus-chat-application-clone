import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Users | Nexus - Your Ultimate Chat Experience',
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full">{children}</div>;
}