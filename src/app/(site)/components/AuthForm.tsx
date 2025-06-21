`use client`;
// why it is use client

// import Button from '@/app/components/Button'
import Button from './Button'
// import Input from '@/app/components/input/Input'
import input from './input/Input'


import { useState, useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
// import AuthSocialButton from './AuthSocialButton';


// new hooks
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN')// it give an initial value to variant, which is LOGIN and also give a type for safe which is Variant.
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/users')
        }
    },[session?.status, router]);


    const toggleVariant = useCallback (()=> {
        setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'))
    }, [variant]);



    return (
        <div></div>
    )

}


export default AuthForm;