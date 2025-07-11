import getCurrentUser from '../../actions/getCurrentUser'
import { NextResponse } from 'next/server'
import prisma from '../../libs/prismadb' // Create prisma instance to update, create, write data in the database. 
import { pusherServer } from '../../libs/pusher' // what is the effect of pushSever, what if we comment it out
import { get } from 'lodash'


// export async function POST (request: Request) {
//     try {
//         const currentUser = await getCurrentUser()
//         console.log('The current user is:', currentUser);
//     } catch (error:any ){
//         console.log(error, 'ERROR_MESSAGES');
//         return new Response('Internal Server Error', { status: 500 })
//     }
// }


export async function POST (request: Request) {
    try {

        const currentUser = {
            id: '685a53224f60228a49ec598d',
            email: 'r9young@hotmail.com'
        };

        // const currentUser = await getCurrentUser();
        const body = await request.json();
        const { message, image, conversationId } = body;

        // if (!currentUser?.id || !currentUser?.email) {
        // return new NextResponse('Unauthorized', { status: 401 });
        // }

        // --- POST the message ---
        const newMessage = await prisma.message.create({
        // data is the object. 
            data: {
                // these things are act as "props"(input) for POST function
                body: message,
                image,
                conversation: { connect: { id: conversationId } },
                sender: { connect: { id: currentUser.id } },
                seen: { connect: { id: currentUser.id } }, 
                // seen tracks which users have already viewted the message in a group chat
            },
            include: { sender: true, seen: true },
        });
        // -----------------------

        /* The rest updates the conversation and sends notifications
        const updatedConversation = await prisma.conversation.update({ ... });
        await pusherServer.trigger(conversationId, 'messages:new', newMessage);
        const lastMessage = updatedConversation.messages[updatedConversation.messages.length - 1];
        updatedConversation.users.map((user) => {
        pusherServer.trigger(user.email!, 'conversation:update', { ... });
        });
        */

        return NextResponse.json(newMessage);
    
    } catch (error: any) {
        console.log(error, 'ERROR_MESSAGES');
        return new Response('Internal Server Error', { status: 500 })
    }
    
}