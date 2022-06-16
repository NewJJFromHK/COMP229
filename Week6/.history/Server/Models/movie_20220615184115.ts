//Step 1 - Import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

//Step 2 - Create a Schema that matches the data
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

//Step 3 
const Model = mongoose.model("Movies", MovieSchema);
export default Model;