
console.log("Hello")

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () =>
{
    mongoose.connect("mongodb://localhost:27017/Web15");    
}

const userschema = mongoose.Schema({
    id: Number,
    movie_name: String,
    movie_genre: String,
    production_year: Number,
    budget: Number,
})

const User1 = mongoose.model("mock_movie",userschema);

app.get("/movie", async(req,res) =>
{
    const UserData = await User1.find({}).lean().exec();
    console.log('UserData:', UserData);

    return res.send(UserData);
})
app.listen(5600, async() =>
{
    try
    {
        await connect()
        console.log("listening on 5200 port");
    }
    catch(error)
    {
        console.log("error :", error);
    }
})