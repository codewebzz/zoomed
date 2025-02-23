// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '../redux/api/user'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
const Navbar = (props) => {
    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch } = props || true;
    const { items } = useSelector(store => store.cart);
    const { userInfo } = useSelector(store => store.auth);


    // const [flyer, setFlyer] = useState(false);
    // const [flyerTwo, setFlyerTwo] = useState(false);

    const [logoutUser] = useLogoutUserMutation();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const response = await logoutUser().unwrap();
            if (response.success) {
                dispatch(logout())
                toast.info(`${response?.data} You are peacefully logged out`)
            }
            // console.log('User logged out successfully--', response);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleSearch = () => {
        setShowSearch(!showSearch)
        if (!location.pathname.includes("collection")) {
            setShowSearch(true)
            navigate('/collection')
        }
    };

    const toggleCategory = (e) => {
        console.log('category clicked', e.target.textContent);
        navigate('/collection', { state: { category: e.target.textContent } })
    };

    const fish_categories = [
        { "name": "Terrariums & Enclosures", "description": "Safe and spacious homes for your pets." },
        { "name": "Heating & Lighting", "description": "Maintain optimal temperature and light cycles." },
        { "name": "Substrates & Bedding", "description": "Natural, eco-friendly, and moisture-retaining options." },
        { "name": "Nutrition & Feeding", "description": "Premium food and supplements for reptiles and amphibians." },
        { "name": "Decoration & Accessories", "description": "Create a realistic habitat with plants, hides, and waterfalls." },
        { "name": "Water & Filtration", "description": "Keep your pet’s environment clean and fresh." }
    ]


    return (
        <div className="h-28">
            <div className='flex items-center justify-between py-5 font-medium fixed top-0 left-[2%] bg-white w-[95%] z-50 px-5 md:px-10'>
                <img src={assets.logo} className='w-20 h-16' alt="" />
                <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                    <div className="font-semibold flex gap-4">
                        <NavLink to="/" className="flex flex-col items-center gap-1">
                            <p>Home</p>
                            <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>

                        <div className="">
                            <div className='group relative z-10'>
                                <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                                    <p className="">Categorys</p>
                                    <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                                </NavLink>

                                <div className='group-hover:block h-96 w-52 overflow-y-scroll hidden absolute dropdown-menu left-0 pt-4 bg-gray-50 rounded'>
                                    <div className='flex flex-col gap-2  py-3 px-5 text-gray-800 bg-slate-100 z-30 rounded'>
                                        {fish_categories.map(categoryItem => (
                                            <p key={categoryItem.name} className='flex flex-col gap-2'>
                                                <span className="cursor-pointer hover:text-black" onClick={toggleCategory}>{categoryItem.name}</span>
                                                <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                                                {/* <span className="text-gray-600">{categoryItem.description}</span> */}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/about" className="flex flex-col items-center gap-1">
                            <p>About us</p>
                            <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>

                        <NavLink to="/contact" className="flex flex-col items-center gap-1">
                            <p>Contact us</p>
                            <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>

                        <NavLink to="/explore" className="flex flex-col items-center gap-1">
                            <p>Explore</p>
                            <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                    </div>
                </ul>

                <div className='flex items-center gap-6 '>
                    <img onClick={handleSearch} src={assets.search_icon} className='w-5 cursor-pointer' />
                    <div className='group relative z-10'>
                        <Link to="/login"><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-gray-50 rounded'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 bg-slate-100 z-30 rounded'>
                                {userInfo?.role === "admin" && <NavLink className='cursor-pointer hover:text-black' to='/admin'>Admin panal</NavLink>}
                                <NavLink to={"/profile"} className='cursor-pointer hover:text-black'>My profile</NavLink>
                                <NavLink className='cursor-pointer hover:text-black' to='/orders'>Orders</NavLink>

                                {userInfo ? <NavLink className='cursor-pointer hover:text-black' to='/login' onClick={handleLogout}>Logout</NavLink>
                                    :
                                    <NavLink className='cursor-pointer hover:text-black' to='/login'>LogIn</NavLink>}
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className='relative'>
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{items.length}</p>
                    </Link>
                    <img onClick={() => { setVisible(true) }} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
                </div>

                {/* sidebar menu for small screens */}
                <div className={`absolute right-0 bottom-0 z-40 top-0 overflow-hidden h-64 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-600'>
                        <div onClick={() => { setVisible(false) }} className='flex items-center gap-4 p-3 cursor-pointer'>
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/">Home</NavLink>
                        <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
                        <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/about">About us</NavLink>
                        <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/contact">Contact us</NavLink>
                        <NavLink onClick={() => { setVisible(false) }} className="py-2 pl-6 border" to="/explore">Exlore</NavLink>

                    </div>
                </div>

            </div >
        </div>
    )
}

export default Navbar
