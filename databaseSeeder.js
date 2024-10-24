const router = require('express').Router();

const User = require('./models/User')
const users = require('./data/Users')

const Products = require('./models/Product')
const products = require('./data/Products')

const AsyncHandler = require('express-async-handler')

router.post('/users', AsyncHandler (
    async(req,res) => {
        await User.deleteMany({});
        const UserSeeder = await User.insertMany(users)
        res.send({UserSeeder})
    })
);

router.post('/products', AsyncHandler (
    async(req,res) => {
        await Products.deleteMany({});
        const ProductSeeder = await Products.insertMany(products)
        res.send({ProductSeeder})
    })
);


module.exports = router;