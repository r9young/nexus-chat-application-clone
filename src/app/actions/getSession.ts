// 

import { getServerSession } from 'next-auth';
// getServerSession is a NextAuth helper that retrieves the current user session on the server.
import { authOptions } from '../api/auth/[...nextauth]/route';


export default async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}
