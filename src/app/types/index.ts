import { Conversation, Message, User } from '@prisma/client';
// so these three types are come from my schema.prisma
// it comes from model of schema which customed by myself

export type FullMessageType = Message & {
  sender: User;
  seen: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};
