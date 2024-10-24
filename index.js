const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

//connect db
mongoose.connect(process.env.MONGOOSEDB_URL)
    .then(() => console.log("db connectd"))
    .catch(err => console.error("DB connection error:", err));


const databaseSeeder = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");

app.use(express.json())

//database seeder routes
app.use('/api/seed', databaseSeeder);

//route for users
//api/users/login
app.use('/api/users', userRoute);

//routes for products
app.use("/api/products", productRoute);



app.listen(PORT || 3000, () => {
    console.log(`server listening on port ${PORT}`);
});







//rskmcn
//I0DFgjcHBEW4mXiv
//mongodb+srv://rskmcn:<db_password>@cluster0.u1fsg.mongodb.net/react-node-app




//api product test route
//app.get("/api/products", (req, res) => {
//  res.json(products);
//});

//app.get("/api/products/:id", (req, res) => {
//  const product = products.find((product) => product.id == req.params.id)
//    res.json(product);
//});