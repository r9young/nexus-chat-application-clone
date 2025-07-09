import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
// import Header 
import Body from './components/Body';
import Form from "../[conversationId]/components/Form";

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
        <Body initialMessages={messages}/> 
        // The Body component holds the current list of messages in state, 
        // updates it via Pusher, and renders each message using MessageBox
        <Form/> // submit message
    )

}




export default ConversationId;