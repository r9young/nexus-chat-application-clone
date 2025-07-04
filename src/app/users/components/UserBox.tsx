'use client'

import Avatar from '../../(site)/components/Avatar'
import { User } from '@prisma/client'
// import { data } from 'autoprefixer';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react'
import axios from 'axios';
import LoadingModal from '../components/UserList'


interface UserBoxProps {
    user:User
    // see issue #70 & 71
}

const UserBox: React.FC<UserBoxProps> = ({ user }) => {
    const router = useRouter();
    // why do we use useRouter here
    const [isLoading, setIsLoading ] = useState(false)
    // set up the inital value of isLoading is false
    // then it will use function setIsLoading to change the value, how to change it?!


    const handleClick = useCallback (() => {
        setIsLoading(true)

        axios
            // regarding post -> route.push: see issue#73
            // .post('/api/conversations', {
            //     userId: user.id, 
            // })
            // .then((date) => {
            //     // router.push(`/conversations/${data.data.id}`)
            //      router.push(`/conversations/${response.data.id}`);
            // })
            // .finally(() => {
            //     setIsLoading(false);
            //     // set the isLoading back to false
            // })
            .post('/api/conversations', { userId: user.id })
            .then((response) => {
                router.push(`/conversations/${response.data.id}`);
            })
            .finally(() => {
            setIsLoading(false);
            });
            }, [user, router]);


    return (
        <> 
            {isLoading && <LoadingModal />}
            {/* Debug:
            Property 'users' is missing in type '{}' but required in type 'UserListProps'.ts(2741)
            UserList.tsx(7, 5): 'users' is declared here. */}
            <div
                title="Start a chat"
                onClick={handleClick} // if we add a onClick here, does it mean it become a button
                className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer"
            >
                <Avatar user = {user} />
                <div className="min-w-0 flex-1">
                    <div className="focus:outline-none">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UserBox;