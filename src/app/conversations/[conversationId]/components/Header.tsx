'use client';


import Avatar from "@/app/(site)/components/Avatar";
// import useOtherUser
import { Conversation, User } from '@prisma/client'
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
// import ProfileDrawer
// import AvatarGroup
// import useActiveList 


// so Conversation & User is from the schema.prisma
interface HeaderProps {
    conversation: Conversation & {
        users: User[];
    }
}


const Header: React.FC<HeaderProps> = () => {
    return (

        <div></div>
    )
}

export default Header