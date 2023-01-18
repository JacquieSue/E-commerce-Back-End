const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

 // const { Product } = require('../models');

// const productData = 

// const seedProducts = () => Product.bulkCreate(productData);

// module.exports = seedProducts;

// const seedCategories = () => Category.bulkCreate(categoryData);

// module.exports = seedCategories;

// const { Category } = require('../models');

// const categoryData = 
// const { Tag } = require('../models');
// const { ProductTag } = require('../models');

//const productTagData = 
//const seedProductTags = () => ProductTag.bulkCreate(productTagData);

//module.exports = seedProductTags;