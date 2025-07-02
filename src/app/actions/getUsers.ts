import { Session } from 'inspector';
import client from '../libs/prismadb' // import the instance 
import getSession from './getSession'

//  in this file you are importing the Prisma client instance from @/app/libs/prismadb and using it to interact with (manipulate/query) the database.



const getUsers = async () => {
  try {

      // Get all users except the current user
     const users = await client.user.findMany({ 
      where: {
        NOT: {
          email:sessionStorage.user.email as string, 
        }
      }
     })

  } catch (error: any) {
    return [];
  }
}