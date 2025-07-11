
import EmptyState from '../../components/EmptyState';
import getConversationById from '../../actions/getConversationById';
import getMessages from '../../actions/getMessages'

import Header from './components/Header';
import Body from './components/Body';
import Form from './components/Form';

interface IParams {
    conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {

    const conversation = await getConversationById(params.conversationId);  // it is the custom hook function 
    const messages = await getMessages(params.conversationId);  // it is the custom hook function, as well!

    if (!conversation) {
        return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
            <EmptyState />
            </div>
        </div>
        );
    }

    return (
        <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
            <Header />
            <Body  />
            <Form />
        </div>
        </div>
    );
   
}

export default ConversationId