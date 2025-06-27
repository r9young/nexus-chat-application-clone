'use client'

import { useState } from 'react';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CldUploadButton } from 'next-cloudinary';
import axios from 'axios';
import toast from 'react-hot-toast';
import Modal from '../Modal';
import Input from '../input/Input';
import Image from 'next/image';
import Button from '../Button';


interface SettingsModalProps {
    currentUser: User; 
    isOpen?: boolean;
    onClose: () => void;
}


const SettingsModal: React.FC<SettingsModalProps> = ({
    currentUser,
    isOpen,
    onClose,
}) => {
    
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>Modal is opened</div>
        </Modal>
    )
}

export default SettingsModal;