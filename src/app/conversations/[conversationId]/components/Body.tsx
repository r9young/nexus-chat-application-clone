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
    pusherClient.subscribe(conversationId)

    const messageHandler = (message: FullMessageType) => {}
    const updateMessageHandler = (newMessage: FullMessageType) => {}

    pusherClient.bind('messages:new', messageHandler)
    pusherClient.bind('message: update', updateMessageHandler)


    return () => {
      pusherClient.unsubscribe(conversationId)
      pusherClient.unbind('message:new', messageHandler)
      pusherClient.bind('messages:update', updateMessageHandler)
    }
  }, [conversationId])



  return (
    <div ref={bottomRef} className='pt-24' />
    // bottomRef.current
  );
}


export default Body;