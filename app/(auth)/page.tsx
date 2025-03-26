'use client'
import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    // function to change variant onclick
    const toggleVariant = useCallback(()=> {
        setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login');

    }, []) // [] is a dependency array

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black/50 w-full h-full">
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="Logo" className='h-12' />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className='text-white font-semibold text-4xl mb-8'>
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {/* imported input component, passing parameters as props */}
                            <Input 
                            label='Email'
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id='email'
                            type='email'
                            value={email}
                            
                            />
                            {/* {variant === 'register' ?  <Input 
                            label='Username'
                            onChange={(ev: any) => setName(ev.target.value)}
                            id='name'
                            type='text'
                            value={name}
                            
                            /> : ''}  or try below*/}
                            {variant === 'register' &&( <Input 
                            label='Username'
                            onChange={(ev: any) => setName(ev.target.value)}
                            id='name'
                            type='text'
                            value={name}
                            
                            />)}
                            <Input 
                            label='Password'
                            onChange={(ev: any) => setPassword(ev.target.value)}
                            id='password'
                            type='password'
                            value={password}
                            
                            />
                        </div>
                        <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700'>
                           {variant === 'register' ? 'Sign up' : 'Login'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                           {variant === 'login' ? 'First time using Netflix?' : 'Already have account?'} <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>{variant === 'login' ? 'Create account' : 'Login'}</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth