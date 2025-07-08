'use client'

import useConversation from "@/app/hooks/useConversation"
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import MessageInput from './MessageInput';


const form = () => {
    const { conversationId } = useConversation();


    // so the userForm collect the data for me
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<FieldValues>({
        defaultValues: {
            message: '',
        }
    })


    // So it is a HTTP Request
    // onSubmit function return null, but clear your input field and send an HTTP Post request
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // clear your input field
        setValue('message', '', { shouldValidate: false }); // clear the value after submit

        // send user's message data to the backend API
        axios.post(`/api/messages`, {
        ...data,
        conversationId,
        });
    };

    return (
       <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-2 lg:gap-4 w-full"
            >

                <MessageInput
                id="message"
                register={register}
                errors={errors}
                required
                placeholder="Type a message..."
                />

                <button
                    type="submit"
                    className="rounded-full p-2 bg-cyan-500 cursor-pointer hover:bg-cyan-600 transition"
                >
                {/* <HiPaperAirplane size={20} className="text-white" /> */}
                </button>

            </form>

        </div>

    )
}

export default form