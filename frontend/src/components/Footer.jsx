// eslint-disable-next-line no-unused-vars
import React from 'react'
const Footer = () => {
    return (
        <>
            <footer className='relative'>
                <div className='absolute top-0 left-0 w-full pb-10'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-green-900"></path>
                    </svg>
                    <div className='grid lg:grid-cols-4 md:grid-cols2'>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold text-green-900  '>why choose us</h2>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold text-green-900  '>Products</h2>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold text-green-900  '>Aboutus</h2>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold text-green-900'>Contact us</h2>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer