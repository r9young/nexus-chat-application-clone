'use client'

import Modal from '../../../../app/(site)/components/Modal'
// Modal create a grey full size background 
import Image from 'next/image'

interface ImageModalProps {
    isOpen?: boolean;
    src?: string | null;
    onClose: () => void;
    children: React.ReactNode
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, src, onClose, children}) => {

    return (
        <Modal
            onClose = {onClose}

        >

            {children}

        </Modal>
    )
}

export default ImageModal