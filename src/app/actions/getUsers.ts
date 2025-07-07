
import client from '../libs/prismadb' // import the instance 
import getSession from './getSession'

//  in this file you are importing the Prisma client instance from @/app/libs/prismadb and using it to interact with (manipulate/query) the database.

const getUsers = async () => {
  try {
    // console.log("Fetching session...");
    const session = await getSession();
    // console.log("Session:", session);

    if (!session?.user?.email) return [];

    // Get all users except the current user
    
    const users = await client.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email as string,
        },
      },
    });

    if (!users) return [];

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;