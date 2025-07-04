import PusherServer from 'pusher'
import PusherClient from 'pusher-js'


// PUSHER_APP_ID
// NEXT_PUBLIC_PUSHER_APP_KEY
// PUSHER_SECRET
// NEXT_PUBLIC_PUSHER_APP_KEY


export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    secret: process.env.PUSHER_SECRET!,
    // cluster: 'ap2',
    cluster: 'mt1',
    useTLS: true,
})

// exmaple of how to apply pusherServer
// e.g await pusherServer.trigger(conversationId, 'messages:new', newMessage);

//
export const pusherClient = new PusherClient (
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    {
    channelAuthorization: {
      endpoint: '/api/pusher/auth',
      transport: 'ajax',
    },
    cluster: 'ap2',
    }
)