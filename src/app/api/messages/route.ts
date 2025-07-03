import getCurrentUser from '../../actions/getCurrentUser'
import { NextRequest } from 'next/server'
import prisma from '../../libs/prismadb'
import { pusherServer } from '../../libs/pusher'


export async function POST (request: Request) {
    try {

        return 
    } catch (error: any) {
        console.log(error, 'ERROR_MESSAGES');
        return new Response('Internal Server Error', { status: 500 })
    }
    
}