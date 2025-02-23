import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation, useRegisterMutation } from '../redux/api/user';
import { toast } from 'react-toastify';

const Login = () => {
    const [currentState, setCurrentState] = useState("Sign up");
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const [login, { isLoading: loginLoading }] = useLoginMutation();
    const [register, { isLoading: registerLoading }] = useRegisterMutation();

    const { userInfo } = useSelector(store => store.auth);
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/";

    useEffect(() => {
        if (userInfo) navigate(redirect);
    }, [userInfo, navigate, redirect]);

    const handleInputChange = (event) => {
        setUserData(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!userData.email || !userData.password || (currentState === "Sign up" && !userData.userName)) {
            toast.error("Please fill in all required fields.");
            return;
        }

        try {
            if (currentState === "Login") {
                const response = await login(userData).unwrap();
                setUserData({});
                toast.success(`${response.message} 👍🤩`, { position: "top-center", closeOnClick: true });
                navigate(redirect);
            } else {
                const response = await register(userData).unwrap();
                setCurrentState("Login");
                setUserData({});
                toast.success(`${response.message}`, { position: "top-center", closeOnClick: true });
                // Instead of full reload, reset the form and switch to Login screen
                setTimeout(() => navigate(0), 500);
            }
        } catch (error) {
            toast.error(error?.data?.message || "An unexpected error occurred.");
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
                <div className="inline-flex gap-2 mb-2 mt-10 items-center">
                    <p className="prata-regular text-3xl">{currentState}</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
                </div>

                {currentState === "Sign up" && (
                    <input
                        type="text"
                        name="userName"
                        className="w-full px-3 py-2 border border-gray-800"
                        required
                        placeholder="Name"
                        onChange={handleInputChange}
                    />
                )}

                <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-800"
                    required
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border border-gray-800"
                    required
                    placeholder="Password"
                    onChange={handleInputChange}
                />

                <div className="w-full flex justify-between text-sm mt-[-8px]">
                    <p onClick={() => navigate('/forgot-password')} className="cursor-pointer">Forgot Your Password?</p>
                    <p onClick={() => setCurrentState(currentState === "Login" ? "Sign up" : "Login")} className="cursor-pointer">
                        {currentState === "Login" ? "Create Account" : "Login here"}
                    </p>
                </div>

                <button
                    className="bg-black text-white px-8 py-2 mt-4 disabled:opacity-50"
                    disabled={loginLoading || registerLoading}
                >
                    {currentState === "Login"
                        ? loginLoading
                            ? "Signing In..."
                            : "Sign In"
                        : registerLoading
                            ? "Signing Up..."
                            : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default Login;