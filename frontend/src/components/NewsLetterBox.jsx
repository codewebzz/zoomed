import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSubscribeMutation } from '../redux/api/subscribApi';

const NewsLetterBox = () => {
    const [subscribe, { isLoading }] = useSubscribeMutation();

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        phoneNo: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await subscribe(formData).unwrap();
            if (response?.success) {
                toast.success(response.message);
                setFormData({ email: '', fullName: '', phoneNo: '', address: '' }); // Clear form
            }
        } catch (error) {
            toast.error(error?.data?.message || 'Subscription failed');
            console.error('Error subscribing:', error);
        }
    };

    return (
        <>
            <div className="flex w-full my-10">
                <div className="w-1/2 overflow-hidden">
                    <img
                        className="w-full h-full hover:scale-110 transition-all duration-100 ease-in-out"
                        src="https://i.pinimg.com/736x/95/e4/4e/95e44ede4b8ea0b4607bd1158405bef6.jpg"
                        alt="Newsletter"
                    />
                </div>
                <div className="w-1/2 p-10">
                    <h1 className="text-center uppercase font-semibold">Care Guides</h1>
                    <p>
                        At Exo Terra, we understand that owning a reptile or amphibian is a unique and rewarding
                        experience. However, it also comes with its own set of responsibilities.
                    </p>
                    <p>
                        Whether you’re a beginner enthusiast or an experienced herpetologist, our academy offers a wealth
                        of information, tips, and insights to enhance your understanding and skills.
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <p className="text-center text-2xl text-gray-800 font-medium">Subscribe to our mailing list</p>
                <p className="text-center text-gray-400 mt-3">Get exclusive updates and care guides!</p>

                <form onSubmit={onSubmitHandler} className="w-full bg-white rounded py-5 px-10 flex flex-col gap-3 mx-auto my-6 border">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full sm-flex-1 outline-none p-2 border rounded"
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="fullName">Full Name</label>
                    <input
                        className="w-full sm-flex-1 outline-none p-2 border rounded"
                        id="fullName"
                        name="fullName"
                        required
                        type="text"
                        placeholder="Enter your Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <label htmlFor="phoneNo">Phone Number</label>
                    <input
                        className="w-full sm-flex-1 outline-none p-2 border rounded"
                        id="phoneNo"
                        name="phoneNo"
                        required
                        type="text"
                        placeholder="Enter your Phone No."
                        value={formData.phoneNo}
                        onChange={handleChange}
                    />

                    <label htmlFor="address">Address</label>
                    <input
                        className="w-full sm-flex-1 outline-none p-2 border rounded"
                        id="address"
                        name="address"
                        required
                        type="text"
                        placeholder="Enter your full address"
                        value={formData.address}
                        onChange={handleChange}
                    />

                    <button type="submit" className="bg-black text-white align-middle mx-auto text-xs px-10 py-4 rounded">
                        {isLoading ? (
                            <span className="flex gap-2 text-center">
                                Subscribing
                                <span className="animate-bounce bg-green-500 font-bold mt-2 text-3xl w-2 h-2 rounded-full"></span>
                                <span className="animate-bounce bg-yellow-500 font-bold mt-2 text-3xl w-2 h-2 rounded-full"></span>
                            </span>
                        ) : (
                            <span>Submit</span>
                        )}
                    </button>
                </form>
            </div>
        </>
    );
};

export default NewsLetterBox;