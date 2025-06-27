'use client'

import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    children: React.ReactNode 
    // children is given to the SettingsModal.tsx
}


const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    return (
        // <div>Test</div>
        <Transition.Root show={isOpen}>
            <Dialog onClose={onClose}>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

                        {/* creates a fade-in/out animation for a backdrop (gray translucent background) that appears behind your modal content.*/}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <div className="fixed inset-0 bg-gray-500 transition-opacity bg-opacity-75" />
                        </Transition.Child>
                        
                        <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 text-left shadow-xsl w-full transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>         
            </Dialog>
        </Transition.Root>
    )
}

export default Modal;