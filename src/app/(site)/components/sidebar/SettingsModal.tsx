'use client'

import { useState } from 'react';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CldUploadButton } from 'next-cloudinary';
import axios from 'axios';
import toast from 'react-hot-toast';
import Modal from '../../components/Modal';
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
                 {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                 <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                Profile ................................................................test
                                </h2>
                            </div>
                            <div className="mt-10 flex flex-col gap-y-8">
                          
                        </div>
                    </div>
                </form>
    
        </Modal>
    )
}

export default SettingsModal;