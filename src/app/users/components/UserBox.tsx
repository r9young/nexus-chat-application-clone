'use client'

import Avatar from '../../(site)/components/Avatar'
import { User } from '@prisma/client'
import { data } from 'autoprefixer';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react'

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
            .post('/api/conversations', {
                userId: user.id, 
            })
            .then((date) => {
                router.push(`/conversations/${data.data.id}`)
            })
            .finally(() => {
                setIsLoading(false);
                // set the isLoading back to false
            })
          
    }, [user, router]);


    return (
        <> 
        {/* <></> is shorthand for <React.Fragment> */}
        {/* we used a React Library before which is to substute the <></>, what it is? */}
            {/* {isLoading && <LoadingModal />} */}
            {isLoading}

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