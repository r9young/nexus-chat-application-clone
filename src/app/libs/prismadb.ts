// the purpose of this file is to create an instance

import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis['prisma'] = client;
// avoid hot reload in development environment


export default client; 


// then next step will go to getUssers.tsx to use the instance and muniplate the database