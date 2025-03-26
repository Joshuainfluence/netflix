import React from 'react'

const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black/50 w-full h-full">
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="Logo" className='h-12' />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className='text-white font-semibold text-4xl mb-8'>
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth