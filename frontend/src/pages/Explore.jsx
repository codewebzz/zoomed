import NewsLetterBox from "../components/NewsLetterBox"

const Explore = () => {
    return (
        <>
            <div className="w-full p-10 shadow">
                <p className="text-gray-800 text-center md:text-left">
                    <span className="font-bold">At Beast Bazaar, we’re more than just a pet store—</span>we’re a passionate community of exotic pet enthusiasts. Our <span className="text-black">Care Guides</span> provide expert advice to help you nurture your reptiles, amphibians,
                    and other unique pets. With Beast Academy, you can join expert-led sessions on pet care, enclosure setup, and feeding habits. Follow our Expeditions as we explore the wild, gathering insights to
                    create the best habitats for your pets. Join us on this journey to discover, learn, and grow together!
                </p>
            </div>
            <div className="flex flex-wrap w-full">
                <div className="w-full md:w-1/2 text-center p-10">
                    <h1 className="font-semibold">Discover, Learn & Grow with Beast Bazaar</h1>
                    <p className="text-center">We don’t just sell products; we build a thriving community of exotic pet lovers.</p>
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <p className="">
                        <span className="font-semibold">🌍 Care Guides – </span> Learn how to care for your reptiles, amphibians, and other exotic pets.
                    </p>
                    <p className="">
                        <span className="font-semibold">🎓 Beast Academy – </span>Join expert-led sessions on pet care, enclosure setup, and feeding habits
                    </p>
                    <p className="">
                        <span className="font-semibold">🚀 Expeditions – </span> Follow our journeys as we explore the wild to create better habitats for your pets.
                    </p>
                </div>
            </div>
            <NewsLetterBox />
        </>
    )
}

export default Explore
