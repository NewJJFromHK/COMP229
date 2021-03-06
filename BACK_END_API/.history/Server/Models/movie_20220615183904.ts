import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

const MovieSchema = new Schema
({
    Name: String,
    Year: String,
    Director: String,
    Rating: String 
},
{
    collection: "movies"
});

const Model = mongoose.model("Mo")