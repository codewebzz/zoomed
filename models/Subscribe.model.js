import mongoose from 'mongoose';

const subscribeSchama = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter a valid email !!"],
            unique: [true, "Email already exists.!!"],
        },
        fullName: {
            type: String,
            required: [true, "Please enter your full name.!"],
            trim: true,
            lowercase: true,
            minLength: [3, "Full name must be at least 3 characters long.!"],
        },
        phoneNo: {
            type: Number,
            required: [true, "Please enter a valid phone number"],
            // unique: [true, "Please enter a valid phone number"],
            validate: {
                validator: function (v) {
                    return /^[0-9]{10}$/.test(v);
                },
                message: props => `${props.value} is not a valid phone number.!`,
            }
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            // required: [true,"user references is required!"],
        },
        address: {
            type: String,
            required: true,
            maxLength: [300, "address cannot exceed 300 characters!"]
        }
    }, { timestamps: true }
);


export default mongoose.model("subscribers", subscribeSchama);