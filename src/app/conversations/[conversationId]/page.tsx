import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
// import Header 
import Body from './components/Body';
import Form from "../[conversationId]/components/Form";
import message from './components/mockMessage.json'
import React from 'react';  
import { FullMessageType } from '../../types';

interface IParams {
    conversationId: string;
}

// before importing the json into initialMessages, so we fixed up the type of 'createAt' before importing
const typedMessages: FullMessageType[] = message.map((m) => ({
  ...m,
  createdAt: new Date(m.createdAt),
  sender: {
    ...m.sender,
    createdAt: new Date(m.sender.createdAt),
    updatedAt: new Date(m.sender.updatedAt),
  },
}));


// so actually, it export the conversation page
const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);

    if (!conversation) {

        return (

        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
            <EmptyState />
            </div>
        </div>
        )
    }

    return(
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <Body initialMessages={typedMessages} />
                <Form/> 

            </div>
        </div>
      )
}




export default ConversationId;