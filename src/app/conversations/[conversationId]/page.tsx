import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
// import Header 
import Body from './components/Body';
import Form from "../[conversationId]/components/Form";
import message from './components/mockMessage.json'


interface IParams {
    conversationId: string;
}


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
                <Body initialMessages={message} />
                <Form/> 

            </div>
        </div>
      )
}




export default ConversationId;