'use client';

import { FullMessageType } from '@/app/types';
import { useSession } from 'next-auth/react';
import { useState } from 'react'
import clsx from 'clsx';
import Avatar from '../../../../app/(site)/components/Avatar';
import Image from 'next/image';

interface MessageBoxProps {
    isLast: boolean;
    data: FullMessageType
}


// If you don’t use destructuring, you must explicitly use the parameter name (props) to access the properties

const MessageBox: React.FC<MessageBoxProps> = ({ isLast, data }) => {
    // Adding React Hooks
    const session = useSession();
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    //Access Properties - improve readablity:
    const messageBody = data.body;
   

    // Logical 1: isOwn is true - comparing current user and sender are the same person
    const isOwn = session?.data?.user?.email === data.sender.email

    // Logical 2: const seenList = (data.seen || [])
    // ...


    // dyanmic classes
    const container = clsx('flex gap-3 p-4', isOwn && 'justify-end');
    const avatar = clsx(isOwn && 'order-2');
    const body = clsx('flex flex-col gap-2', isOwn && 'items-end');
    const message = clsx(
        'text-sm w-fit overflow-hidden',
        isOwn ? 'bg-cyan-500 text-white' : 'bg-gray-100',
        data.image ? 'rounded-md p-0' : 'rounded-full py-2 px-3'
    );


    return (
        <div className={container}>
            <div className={avatar}>
                <Avatar user={data.sender} />
            </div>
            <div className={body}>
                {/* A line of message with name/email + DataTime + message/picture */}

                {/* name/email */}
                <div className="flex items-center gap-1">
                    <div className="text-sm text-gray-500">
                        {data.sender?.name || data.sender?.email}
                    </div>
                    
                    {/* DataTime */}
                    <div className="text-xs text-gray-400">
                        {/* {format(new Date(data.createdAt), 'p')} */} 
                        {/* issue */}
                    </div>

                    {/* Message/Picture */}
                    <div className={message}>
                        {/* imageModa - wehn a user clicks an image in a message. Then it will display the image in a modal popup */}
                        {/* <ImageModal
                        isOpen={isImageModalOpen}
                        src={data.image}
                        onClose={() => setIsImageModalOpen(false)}
                        /> */}

                        {data.image ? (
                            <Image
                                src={data.image}
                                width={288}
                                height={288}
                                alt=''
                                className=''
                            />
                        ) : (
                            <div>{data.body}</div>
                        )}


                        {/* show seen list if last message */}

                    </div>
                </div>
            </div>
        </div>
    )

}

export default MessageBox