// import getConversations from "../actions/getConversations"
// import getUssers from '../actions/getUsers'
import {Metadata } from 'next';
import Sidebar from '../(site)/components/sidebar/Sidebar'


export const metadata: Metadata = {
    title: 'My Conversation | Nexus - Your Ultimate Chat Experience'
}


export default async function ConversationsLayout ({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    );

}