import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Title from "../../components/Title"
import Sidebar from "../components/Sidebar"
import { Button } from "@material-tailwind/react"
import { useGetAllSubscriptionsQuery } from "../../redux/api/subscribApi"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setSubscribInfo } from "../../redux/features/auth/subscrib"

const Subscribers = () => {
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const dispatch = useDispatch();

    const queryParams = new URLSearchParams();

    queryParams.append("page", activePage);

    const { currentData } = useGetAllSubscriptionsQuery(queryParams.toString());

    const { subscribInfo } = useSelector((store) => store.subscrib);

    const fatchData = () => {
        if (currentData) {
            setTotalPages(currentData?.data?.totalPages)
            dispatch(setSubscribInfo(currentData?.data));
        }
    }

    useEffect(() => {
        fatchData();
    }, [currentData]);

    // Handlers for previous and next buttons
    const prevAndNextPages = (value) => {
        if (value === "prev") {
            if (activePage > 1) setActivePage((prevPage) => prevPage - 1);
        } else {
            if (activePage < totalPages) setActivePage((prevPage) => prevPage + 1);
        }
    };

    return (
        <>
            <div className="flex w-full">
                <Sidebar />
                <div className="w-[75%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-700 text-base">
                    <div className="flex justify-between mb-2 flex-wrap">
                        <Title text1={"ALL"} text2={"Subscribers"} />
                        <div className="flex gap-2">
                            <Button
                                variant="text"
                                className="flex items-center gap-2"
                            onClick={() => prevAndNextPages("prev")}
                            disabled={activePage === 1}
                            >
                                <ArrowLeftIcon strokeWidth={3} className="w-4 sm:w-5" /> Previous
                            </Button>
                            <Button
                                variant="text"
                                className="flex items-center gap-2"
                            onClick={() => prevAndNextPages("next")}
                            disabled={activePage === subscribInfo?.totalPages}
                            >
                                Next
                                <ArrowRightIcon strokeWidth={3} className="w-4 sm:w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-blue-'>
                            <div className="hidden px-5 md:px-8 md:grid grid-cols-[1fr_2fr_2fr_1fr_1fr] items-center py-2 border bg-gray-100 text-sm">
                                <b >Name</b>
                                <b>Email</b>
                                <b className="">Address</b>
                                <b>PhoneNo</b>
                                <b>subscribe Date</b>
                                {/* <b className="text-center">Delete Action</b> */}
                            </div>
                            {subscribInfo?.subscribers?.map((subscriber) => (
                                <div
                                    key={subscriber._id}
                                    className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[1fr_2fr_2fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
                                >
                                    {/* <img src={assets.parcel_icon} alt="Parcel Icon" /> */}
                                    <div className="">
                                        {subscriber.fullName}
                                    </div >
                                    <div className="">
                                        {subscriber.email}
                                    </div>
                                    <div className="">
                                        {subscriber.address}
                                    </div>
                                    <div className="">
                                        {subscriber.phoneNo}
                                    </div>

                                    <div className="">
                                        {new Date(subscriber.createdAt).toLocaleDateString()}
                                    </div >
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribers
