'use client'

import Avatar from '@/app/components/Avatar'
import LoadingModal from  ""
import { User } from '@prisma/client'
import { data } from 'autoprefixer';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react'
// useCallback is a react hook that returns a memorized version of a callback function, 
// meaning it will only re-create the function if its  dependencies change. 


// if the user, or router changes - the useCallback hooker will run the handleClick function?


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
            .post('/api/conversations', {
                userId: user.id, 
                // post is for the backend
                // whares the router.push is for the front page navigation
            })
            .then((date) => {
                router.push(`/conversations/${data.data.id}`)
                // Issue: Property data does not exist on type
            })
            .finally(() => {
                setIsLoading(false);
                // set the isLoading back to false
            })
          
    }, [user, router]);


    return (
        <> 
        {/* we used a React Library before which is to substute the <></>, what it is? */}
            {isLoading && <LoadingModal />}

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


    return (
        <div>Test</div>
    )
}


export default UserBox;