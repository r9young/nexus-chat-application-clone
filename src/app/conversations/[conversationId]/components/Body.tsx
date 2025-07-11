'use client'

// React and other libraries
import { useState, useRef, useEffect } from 'react';
import { find } from 'lodash'
import axios from 'axios'

// types
import { FullMessageType } from '@/app/types';

// custom component
import MesssageBox from './MessageBox'; //ok
import useConversation from '@/app/hooks/useConversation' 
import { pusherClient } from '@/app/libs/pusher'


interface BodyProps {
  initialMessages: FullMessageType[];
}


const Body: React.FC<BodyProps> = ({ initialMessages }) => {

  const [messages, setMessages] = useState(initialMessages)
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    // Subscribe to PUSH channel
    pusherClient.subscribe(conversationId);

    // Event handler for new messages
    const messageHandler = (message: FullMessageType) => {
      // Mark message as seen
      axios.post(`/api/conversations/${conversationId}/seen`);

      // Add message to state if it's new
      setMessages((prevMessages) => {
        if (find(prevMessages, { id: message.id })) return prevMessages;
        return [...prevMessages, message];
      });

      // Scroll to the latest message
      bottomRef?.current?.scrollIntoView();
    };

    // Event handler for message updates
    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg.id === newMessage.id ? newMessage : msg))
      );
    };

    // Bind event handlers
    pusherClient.bind('messages:new', messageHandler);
    pusherClient.bind('message:update', updateMessageHandler);

    // Scroll to bottom initially
    bottomRef?.current?.scrollIntoView();

    // Cleanup on unmount
    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind('messages:new', messageHandler);
      pusherClient.unbind('message:update', updateMessageHandler);
    };
  }, [conversationId]);


  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MesssageBox
          key={message.id}
          data={message}
          isLast={i === messages.length - 1}
        />
      ))}

    </div>
  )
  }


export default Body;