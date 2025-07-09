'use client'

import { Children } from 'react';
import Modal from '../../../(site)/components/Modal'
import Image from 'next/image'

interface ImageModalProps {
    isOpen?: boolean;
    src?: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, src, onClose }) => {

    return(
        <Modal onClose={onClose} isOpen={isOpen}>
            <div className="w-80 h-80">
                <Image src={src ?? ''} alt="Image" fill className="object-cover" />
            </div>

        </Modal>
    )

}

export default ImageModal