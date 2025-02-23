// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Title from '../components/Title';
import lighting from "../assets/frontend_assets/lighting.jpg";
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

    return (
        <>
            <div className='text-cente text-2xl pt-10 border-t'>
                <Title text1={"CONTACT"} text2={"US"} />
                <p className="">Join the Beast Bazaar Community</p>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
                <img className='w-full md:max-w-[480px]' src={lighting} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Out Store</p>
                    <p className='text-gray-500'>6/433, Hanshvihar <br />,RIICO area , mansarovar jaiur</p>
                    <p className='text-gray-500'>Mobile no.:+9145994506 <br></br></p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at forever</p>
                    <p className='text-gray-500'>Become part of a passionate network of reptile lovers and pet enthusiasts. </p>
                    <p className='text-gray-500'>[Sign Up Now] </p>
                    {/* <button className=' border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button> */}
                </div>
            </div>
            <div className="">
                <p className="">
                    Become part of a passionate network of reptile lovers and pet enthusiasts.
                </p>
                <div className="">
                    <div className="">
                        <span className="font-semibold">🔗 Register Your Product -- </span>Get exclusive benefits and extended warranty. 📩 Subscribe to
                    </div>
                    <div className="">
                        <span className="font-semibold">🔗 Our Newsletter –- </span>Stay updated on new arrivals, offers, and expert tips. 📱 Follow Us
                    </div>
                    <div className="">
                        <span className="font-semibold">🔗 Social Media –- </span>Connect with us on Instagram, Facebook & YouTube.
                    </div>
                </div>
            </div>
            <NewsLetterBox />
        </>
    )
}
export default Contact
