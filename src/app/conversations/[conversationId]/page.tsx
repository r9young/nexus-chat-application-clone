import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Body from "./components/Body";



interface IParams {
    conversationId: string;
}


const ConversationId = async ({params}:{ params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    // get conversation id
    console.log(`the conversation Id is :`, conversation)
    const messages = await getMessages(params.conversationId);
    // get conversation messages

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
            {/* <Header conversation={conversation} /> */}
            <Body initialMessages={messages} />
            {/* <Form /> */}
        </div>
        </div>
    )
}

export default ConversationId;