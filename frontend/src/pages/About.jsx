// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title';
import Terrariums from '../assets/frontend_assets/terrariums.jpg';
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
    return (
        <>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={"ABOUT"} text2={"US"} />
            </div>
            <div className='my-10 flex flex-col md:flex-row  gap-16'>
                <img src={Terrariums} className='w-full hover:scale-105 transition-all duration-75 ease-in-out md:max-w-[450px]' alt="" />
                <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-600'>
                    <p><span className="font-semibold">Privacy Policy </span>
                        At Beast Bazaar, we value your privacy. We ensure that your personal data is protected and never shared without your consent. Read our full privacy policy here.
                    </p>
                    <p>
                        <span className="font-semibold">Terms & Conditions </span>
                        By using our website and purchasing our products, you agree to our terms of service. Learn more about our policies regarding returns, refunds, and warranties.
                    </p>
                    <p>
                        <span className="font-semibold">Return & Refund Policy </span>
                        Not satisfied? We offer hassle-free returns within 30 days of purchase. Check our return policy for details.
                    </p>
                </div>
            </div>
            <div className='text-xl py-4'>
                <Title text1={"Why "} text2={"CHOOSE US"} />
            </div>
            <div className='flex flex-col md:flex-row  text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
                    <b>Were Here to Assist You!:</b>
                    <p className='text-gray-600'>Got questions? Were here to assist you with all your pet care needs! Whether you have questions about the best terrarium setup, need recommendations for heating and lighting, or want advice on specialized nutrition, our expert support team is ready to help. We’re committed to ensuring your reptiles and exotic pets thrive in a safe and comfortable environment. From choosing the right substrates to finding the perfect accessories.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam temporibus aspernatur molestiae voluptatem est quisquam quaerat iste unde, odit culpa at repudiandae blanditiis doloremque vitae provident inventore explicabo dignissimos?</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam temporibus aspernatur molestiae voluptatem est quisquam quaerat iste unde, odit culpa at repudiandae blanditiis doloremque vitae provident inventore explicabo dignissimos?</p>
                </div>
            </div>
            <NewsLetterBox />
        </>
    )
}

export default About
