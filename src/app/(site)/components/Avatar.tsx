'use client'

import { User } from '@prisma/client'
import Image from 'next/image';
import useActiveList from '../../hooks/useActiveList'
import icon from "../../../../public/image/avatar.jpg"


interface AvatarProps {
    user: User;
}

const Avatar: React.FC <AvatarProps> = ({ user }) => {
    // so the Avatar.tsx pull the members array from useActiveList and checks if the current user's email is present to determine active status.
    const { members } = useActiveList()
    const isActive = members.indexOf(user?.email) !== -1;

    return (
        <div className="relative">
            <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
                <Image alt="Avatar" src={user?.image || icon } fill />
            </div>

            {isActive && (
            <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
            )}
        </div>
    )



}

export default Avatar;



