import mongoose from "mongoose";
// ypvQn5Ht9KY93Fow
const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://saher79129:ypvQn5Ht9KY93Fow@cluster0.nxk2u.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;