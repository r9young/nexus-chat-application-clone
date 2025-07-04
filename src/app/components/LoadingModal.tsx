'use client'

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ClipLoader } from 'react-spinners'
import LOADING_MESSAGES from '@/app/constants/loadingMessages'
import getRandomIndex from '../actions/getRandomIndex';
import loadingMessages from '@/app/constants/loadingMessages';

const LoadingModal = () => {
    const index = getRandomIndex(loadingMessages)
    const loadingText = LOADING_MESSAGES[index] // where is the index come from?


    return(
        <Transition.Root show as = {Fragment}>
            <Dialog as="div" className="" onClose={()=>{}}>
            {/* is onClose compulsory type */}
            <Transition.Child
                // we add a Transition.Root, but actual effect of Transition is set under Transition.Child?
                as={Fragment}
                enter="ease-out duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-800"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-gray-100 bg-opacity-50 transition-opacity" />
            </Transition.Child>

            {/* so what is the relationship between the above part and below part */}
            {/* what I don't understand is the Transition.child is closed */}
            {/* so will the Transition effect still include the following part */}


            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                    {/* so the Dialog.Panel is the messagebox? */}
                    {/* so what I believe is the following <Dialog.Panel> is the message box. Other thing including Transition is just a effect? */}
                    <Dialog.Panel>
                        <ClipLoader size={24} color="#3B82F6" />
                        <p className="mt-4">{loadingText}</p>
                    </Dialog.Panel>
                    
                </div>
            </div>
            </Dialog>
        </Transition.Root>
    )



}

export default LoadingModal;