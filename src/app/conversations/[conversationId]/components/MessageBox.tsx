'use client'

// External Libraries
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';


// Custom Component
import Avatar from '../../../(site)/components/Avatar'
import { FullMessageType } from '@/app/types';
import ImageModal from './ImageModal';


interface MessageBoxProps {
    isLast: boolean;
    data: FullMessageType;
}

// data={message} come from Body.tsx
// message definitely has a prop - seen?!
const MessageBox: React.FC<MessageBoxProps> = ({ isLast, data }) => {
    const session = useSession()
    const [ isImageModalOpen, setIsImageModalOpen ] = useState(false)

    const isOwn = session?.data?.user?.email === data.sender?.email;
    const seenList = (data.seen || [])
        .filter()
        .map()
        .join()

    // dynamic classes





    return (
        <div>
            <div>
                
            </div>
        </div>
    )


}

export default MessageBox;