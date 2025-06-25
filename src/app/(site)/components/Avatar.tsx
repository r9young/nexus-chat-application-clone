'use client'

import { User } from '@prisma/client'
import Image from 'next/image'
import useActiveList from '../hooks/useActiveList';

interface AvatarProps {
    user: User;
}

const Avatar: React.FC <AvatarProps> = ({ user }) => {

}

export default Avatar;