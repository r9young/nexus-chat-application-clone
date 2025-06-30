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


    const {
        register, // used in first input
        formState: {errors}, 
        handleSubmit,// used in onSubmit
        setValue, // redundance in this file
        watch, //  redundance in this file
    } = useForm<FieldValues>({
        defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios
            .post('/api/profile', data)
            .then(() => {
                router.refresh();
                onClose();
            })
            // think about when will catch be triggered?
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false))
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {/* Think about the the effect of onSubmit, handleSubmit and onSubmit */}
            {/* handleSubmit is from useForm */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Profile
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Edit your profile details.
                        </p>


                        <div className="mt-10 flex flex-col gap-y-8">
                        {/* Input will allow you to input the name  */}
                            <Input
                                disabled={isLoading}
                                label="Name"
                                required

                                // Following things is from React useForm
                                // ------ id + register are passed to <input> together
                                id="name"
                                register={register} 
                                // I want to give this custom Input component access to React Hook Form's register function by passing it as a prop named register
                                // Right-hand register = function from useForm()
                                // Left-hand regsiter = prop name you are passing to child, which is the prop defined in the Input.tsx
                                errors={errors} // from useForm
                                
                            />

                            </div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <Image
                                        width={48}
                                        height={48}
                                        // src={currentUser?.image || 'avatar.jpg'}
                                        src={currentUser?.image || '/image/avatar.jpg'}
                                        alt="avatar"
                                        className="rounded-full"
                                    />

                                    {/* what it is for */}
                                    <CldUploadButton
                                        options={{ maxFiles: 1 }}
                                        // onUpload={handleUpload}
                                        uploadPreset="jkyytcex"
                                    >
                                        <Button disabled={isLoading} type="button" secondary>
                                            Change
                                        </Button>

                                    </CldUploadButton>
                                </div>
                            <div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button disabled={isLoading} onClick={onClose} secondary>
                            Cancel
                        </Button>
                        <Button disabled={isLoading} type="submit">
                            Save
                        </Button>
                    </div>
                    
                    </div>
                </div>
            </form>

    
        </Modal>
    )
}

export default SettingsModal;