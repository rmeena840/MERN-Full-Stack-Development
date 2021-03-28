const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/Item');

// @route  GET api/items
// @desc   GET All items
// @access Public

router.get('/products', (req, res) => {
    res.json([
        {
            id: 0,
            product_name: "Sauce Labs Backpack",
            product_description: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
            product_price: "$29.99",
            product_image: "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"
        },
        {
            id: 1,
            product_name: "Sauce Labs Bolt T-Shirt",
            product_description: "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
            product_price: "$15.99",
            product_image: "https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c0dae290.jpg"
        },
        {
            id: 2,
            product_name: "Sauce Labs Onesie",
            product_description: "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
            product_price: "$7.99",
            product_image: "https://www.saucedemo.com/static/media/red-onesie-1200x1500.1b15e1fa.jpg"
        },
        {
            id: 3,
            product_name: "Sauce Labs Bike Light",
            product_description: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
            product_price: "$9.99",
            product_image: "https://www.saucedemo.com/static/media/bike-light-1200x1500.a0c9caae.jpg"
        },
        {
            id: 4,
            product_name: "Sauce Labs Fleece Jacket",
            product_description: "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
            product_price: "$49.99",
            product_image: "https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.439fc934.jpg"
        },
        {
            id: 5,
            product_name: "Test.allTheThings() T-Shirt (Red)",
            product_description: "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
            product_price: "$15.99",
            product_image: "https://www.saucedemo.com/static/media/red-tatt-1200x1500.e32b4ef9.jpg"
        }
    ])
})

module.exports = router;
