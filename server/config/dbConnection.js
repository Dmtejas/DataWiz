import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://tejas:tejas123@cluster0.daqsqsc.mongodb.net/DataWiz-Backend`,
        );
        console.log('Connected to mongoDB', mongoose.connection.host, mongoose.connection.name);
    } catch (err) {
        console.log(err);
    }
};

export {dbConnection}