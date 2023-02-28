const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');
const producttagRoutes = require('./producttagRoutes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
// router.use('/producttags', producttagRoutes);

module.exports = router;