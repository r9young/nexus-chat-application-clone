'use client'

import { useState, useEffect } from 'react';
import { FullMessageType } from '@/app/types';
import MessageBox from './MessageBox';

interface BodyProps {
  initialMessages: FullMessageType[];
}


const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState<FullMessageType[]>([]);

  useEffect(() => {
    fetch('/mockData/mockMessages.json') // from the public directory
      .then((response) => response.json())
      .then((data: FullMessageType[]) => {
        // Parse dates explicitly
        const parsedData = data.map((msg) => ({
          ...msg,
          createdAt: new Date(msg.createdAt),
          sender: {
            ...msg.sender,
            createdAt: new Date(msg.sender.createdAt),
            updatedAt: new Date(msg.sender.updatedAt),
          },
          seen: msg.seen.map((user) => ({
            ...user,
            createdAt: new Date(user.createdAt),
            updatedAt: new Date(user.updatedAt),
          })),
        }));
        setMessages(parsedData);
      });
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
    </div>
  );
};

export default Body;
