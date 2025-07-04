
import EmptyState from '@/app/components/EmptyState';
import Header from './components/Header';
import Body from './components/Body';
import Form from './components/Form';




interface Iparams {
    conversationId: string;
}


const Conversation = async () => {


   if (!Conversation) {

        return(
            <EmptyState />
        )

        return (
            <Header />
            <Body />
            <Form />
        )
   }
   
}