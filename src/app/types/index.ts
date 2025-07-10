// In this file, we are going to fetch the data from the prisma.
// making two special data type for other component to be used. 
// see issue #116

import { Conversation, Message, User } from '@prisma/client'

export type FullMessageType = Message & {
    sender: User;
    seen: User[];
}

export type FullConversationType = Conversation & {
    users: User[];
    messages: FullMessageType[]; 
}