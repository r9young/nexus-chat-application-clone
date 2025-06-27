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
        <div>Test</div>
    )
}

export default Modal;