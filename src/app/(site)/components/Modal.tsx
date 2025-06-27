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
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">\
                        <Transition.Child>
                            <Dialog.Panel>
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