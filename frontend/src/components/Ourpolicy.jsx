// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Ourpolicy = () => {
    return (
        <>
            <div className="my-10 border-b p-10">
                <h1 className="text-3xl text-center mb-5">
                    Welcome to Zoo Med Laboratories!
                </h1>
                <div className="flex flex-col gap-3">
                    <p className="">Here at Zoo Med, animals are our passion, and for 47 years we have made it our mission to supply the very best in exotic pet foods, reptile products, and reptile habitats. As a company made up of reptile hobbyists, we strive to provide the supplies and knowledge needed to successfully care for reptiles, amphibians, fish, insects and other exotic pets to keep them happy and healthy.</p>
                    <p className="">The reptile supplies, accessories, and tools we manufacture are first tested at our office on the private collection of animals we house here. Many of us have desk pets, and many of those desks are wedged into places inbetween the 200+ terrariums, aquariums, paludariums, and other habitats at our facility. Inside our <span className='text-green-400'>Animal Room</span> we house over 90 species ranging from chameleons, geckos, skinks, frogs, fish, newts, tarantulas, and beetles. Outside in our <span className="text-green-400">Turtle Nirvana Greenhouse</span>, we care for 30 species of turtles and tortoises, several of which are endangered.</p>
                    <p className=""><span className="text-orange-400">Breeding</span> and caring for these animals daily sets us apart by giving us a clear understanding of fellow hobbyists needs and those of their animals. We love our pets and truly are a company of pet people for pet people!</p>
                    <p className="">Whether you are an experienced reptile snake breeder or gecko breeder working with hundreds of animals, or youre looking into picking up your first pet bearded dragon, Zoo Med is sure to have what you need.</p>
                    <p className="">Make zoomed.com your top resource for <span className="text-green-400">Care Sheets, UVB and Heat Lighting Guides, Reptile Substrate/Impaction Guides, Reptile Show Dates</span> and more! Check our <span className="font-semibold text-black"> Social Media</span> as well for the latest product releases, educational videos, and cute pictures of our baby animals!</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-around gap-12 my-10 sm:gap-2 text-center py-2 text-xs sm:text-sm md:text-base text-gray-700'>
                <div>
                    <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                    <p className='font-semibold'>Easy Exchange Policy </p>
                    <p className='text-gray-400'>We offer hassle free exchange policy</p>
                </div>

                <div>
                    <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                    <p className='font-semibold'>7 Days Return Policy </p>
                    <p className='text-gray-400'>We provide 7 day free return policy</p>
                </div>

                <div>
                    <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                    <p className='font-semibold'>Best Computer Support </p>
                    <p className='text-gray-400'>we provide 24/7 customer support</p>
                </div>
            </div>

        </>
    )
}

export default Ourpolicy