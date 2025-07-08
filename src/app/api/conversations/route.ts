// import getCurrentUser from "@/app/actions/getCurrentUser";
import getCurrentUser from "../../actions/getCurrentUser"
import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'
import { pusherServer } from "@/app/libs/pusher";
// import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST (request: Request) {
    try {
        // Get Current User
        const currentUser = await getCurrentUser();
        // Get Request Body
        const body = await request.json(); 
        const { userId /* , isGroup, members, name */ } = body;

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', {status: 401})
        }


        const existingConversations = await prisma.conversation.findMany({
        where: {
            OR: [
            {
                userIds: {
                equals: [currentUser.id, userId],
                },
            },
            {
                userIds: {
                equals: [userId, currentUser.id],
                },
            },
            ],
        },
        });

        const existingConversation = existingConversations[0];


        // Create a new Single Conversation

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [{ id: currentUser.id }, { id: userId }],
                }
            },
            include: {
                users: true,
            }
        })

        // Trigger real-time notification via Push without user refresh the page
        newConversation.users.map((user) => {
            if (user.email) {
                pusherServer.trigger(user.email, 'conversation:new', newConversation);
            }
        });

        return NextResponse.json(newConversation);
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

