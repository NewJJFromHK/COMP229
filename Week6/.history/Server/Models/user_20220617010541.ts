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

//Step 3 - Create a Model using the Schema
const Model = mongoose.model("User", UserSchema);

//Step 4 - export the Model -> this make the file a module
export default Model;