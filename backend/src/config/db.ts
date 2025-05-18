import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mikiri.ynhmwvp.mongodb.net/mikiri`)
        .then(() => console.log("DB CONNECTED"));
};
