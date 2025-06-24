`use client`;
// why it is use client

// import Button from '@/app/components/Button'
import Button from './Button'
// import Input from '@/app/components/input/Input'
import Input from './input/Input'
import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';
import { useState, useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { toast } from 'react-hot-toast';


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


    // using the results from one hook (useSession) in another (useEffect).
    useEffect(() => {
        if (session?.status === 'authenticated') { // using the result of useSession()
            router.push('/users')
        }
    },[session?.status, router]);

    // using the updater function (updater) - setVariant from useState within your Callback function
    // useCallback memoizes the toggleVariant function. 
    const toggleVariant = useCallback (()=> {
        setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN')) // since prev === 'LOGIN' -> false, then state is set to 'LOGIN'
        // pre represent previous(current) state value
    }, [variant]);


    const {
        register,
        handleSubmit,
        formState: { errors }, 
    } = useForm<FieldValues>({
        defaultValues: { name: '', email: '', password: ''},
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);


        // Upon successful registration, the frontend immediately authenticates the user
        if (variant === 'REGISTER') {
            // if user selected Register, sends user-provided data (likely name, email, password) to the backend API endpoint /api/register via a POST request)
            axios
                .post('/api/register', data) 
                .then(()=>{
                    signIn('credentials', data) 
                    // this is step ensuring a user experience without needing the user to manually login in again
                })
        }

        if (variant === 'LOGIN') {
            // Directly call signIn to authenticate user with provided login credentials
            signIn('credentials', {
            ...data,
            redirect: false,
            })
        }
    }


    const socialAction = (action: string ) => {
        setIsLoading(true);

        signIn(action, {
            redirect:false
        }) // it is a promise

        .then((res) => {
            if (res?.error) {
                toast.error(res.error)
            }

            if (res?.ok && !res?.error) {
                toast.success("Entering Nexus!")
            }
        })
        
        .finally(() => setIsLoading(false)) 
        // reset the value of IsLoading into true.
    }

    return (
        <section className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input
                            id="name"
                            label="Name"
                            register={{register}}
                            errors={errors}
                            disabled={isLoading}
                        />

                    )}

                        <Input
                            id = "email"
                            type = "email"
                            label = "Email Address"
                            register = {register}
                            error = {errors}
                            disabled = {isLoading}
                        
                        />

                        <Input
                            id = "password"
                            type = "password"
                            label = "Password"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                  

                    <div>
                        <Button disabled = {isLoading} type='submit' fullWidth>
                            {variant === 'REGISTER' ? 'Sign up' : 'Sign in'}
                        </Button>
                    </div>
                </form>

                {/* Social Login Buttons */}
                <article className="mt-6">
                    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                    </div>

                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                            Or continue with
                        </span>
                    </div>


                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick = {() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon = {BsGoogle}
                            onClick = {() => socialAction('google')}
                        />
                        <AuthSocialButton
                            icon = {BsTwitter}
                            onClick = {() => socialAction('twitter')}
                        />

                    
                    </div>
                </article>

                {/* Toggle Login/Register */}
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <span>
                        { variant === 'REGISTER'
                        ? 'Already have an account?'
                        : 'New to Nexus?'        
                        }
                    </span>
                    <button
                     type="button"
                     onClick={toggleVariant}
                     className="underline text-blue-500 hover:text-blue-600"
                    >
                        {variant === 'REGISTER' ? 'Sign in' : 'Sign up'}
                    </button>
                </div>

            </div>
        </section>
    )

}


export default AuthForm;