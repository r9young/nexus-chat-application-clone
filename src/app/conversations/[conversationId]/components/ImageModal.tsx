'use client'

import Modal from '../../../../app/(site)/components/Modal'
// Modal create a grey full size background 
import Image from 'next/image'

interface ImageModalProps {
    isOpen?: boolean;
    src?: string | null;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, src, onClose}) => {
    if (!src) {
        return null;
    }

    return (
        <Modal
            onClose = {onClose} isOpen={isOpen}
        >
            <div className="w-80 h-80">
                <Image src={src} alt="Image" fill className="object-cover" />
            </div>
            

        </Modal>
    )
}

export default ImageModal