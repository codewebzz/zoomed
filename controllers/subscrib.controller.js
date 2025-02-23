import Subscribe from "../models/Subscribe.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const subscribe = asyncHandler(async (req, res) => {
    const { email, fullName, user, phoneNo, address } = req.body;

    if (!email && !fullName && !phoneNo && !address) throw new ApiError(400, "All fields are required");

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email)) throw new ApiError(400, "Please provide a valid email address");
    if (!/^\d{10}$/.test(phoneNo)) throw new ApiError(400, "Please provide a valid phone number");
    if (!/^[a-zA-Z\s]+$/.test(fullName)) throw new ApiError(400, "Please provide a valid full name");
    if (user && !/^[0-9a-fA-F]{24}$/.test(user)) throw new ApiError(400, "Please provide a valid user ID");

    const newSubscribe = new Subscribe({
        email,
        fullName,
        phoneNo,
        user: req?.user?._id,
        address,
    });

    const subscribe = await Subscribe.create(newSubscribe);
    new ApiResponse(201, subscribe, "youre request added successfully.!").send(res);
});

export const getSubscribers = asyncHandler(async (req, res) => {
    const subscribers = await Subscribe.find({ user: req.user._id });
    if (!subscribers) throw new ApiError(404, "No subscribers found");
    new ApiResponse(200, subscribers, "subscriber fetched successfully.!").send(res);
});

export const getSubscriber = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!/^[0-9a-fA-F]{24}$/.test(id)) throw new ApiError(400, "Please provide subscriber valid ID.!");
    const subscriber = await Subscribe.findById(id);
    if (!subscriber) throw new ApiError(404, "Subscriber not found");
    new ApiResponse(200, subscriber, "subscriber fetched successfully.!").send(res);
});

export const getAllSubscribersAndSearch = asyncHandler(async (req, res) => {
    const { search, page = 1, limit = 10, sort = "desc" } = req.query;


    const conditions = {};
    if (search) {
        conditions.$or = [
            { email: { $regex: search, $options: "i" } },
            { fullName: { $regex: search, $options: "i" } },
        ]
        if (/^\d+(\.\d+)?$/.test(search)) conditions.$or.push({ phoneNo: { $regex: search, $options: "i" } });
    };

    const pipeline = [];

    if (conditions) pipeline.push({ $match: conditions });


    const cappedLimit = Math.min(parseInt(limit, 10), 100);
    const skip = (parseInt(page, 10) - 1) * cappedLimit;


    pipeline.push(
        {
            $facet: {
                totalResults: [{ $count: "count" }],
                subscribers: [
                    {
                        $project: {
                            email: 1,
                            fullName: 1,
                            phoneNo: 1,
                            address: 1,
                            createdAt: 1
                        }
                    },
                    { $sort: { createdAt: sort === "asc" ? 1 : -1 } },
                    { $skip: skip },
                    { $limit: cappedLimit },
                ]
            }
        }
    );

    const [results] = await Subscribe.aggregate(pipeline);

    const subscribers = results.subscribers;
    const totalResults = results.totalResults[0]?.count || 0;
    const totalPages = Math.ceil(totalResults / cappedLimit);

    const currentPage = parseInt(page, 10) <= totalPages ? parseInt(page, 10) : 1;

    res.status(200).json(new ApiResponse(200, {
        subscribers,
        totalResults,
        totalPages,
        currentPage
    }, "all subscribers fetched successfully.!"));
});