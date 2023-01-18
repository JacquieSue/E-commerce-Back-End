// const seedCategories = require('./categorySeeds');
// const seedProducts = require('./productSeeds');
// const seedTags = require('./tagSeeds');
// const seedProductTags = require('./product-tagSeeds');
const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

const categorySeeds = require('./categorySeeds.json');
const productSeeds = require('./productSeeds.json');
const tagSeeds = require('./tagSeeds.json')
const producttagSeeds = require('./producttagSeeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categorySeeds);

  const products = await Product.bulkCreate(productSeeds);

  const tags = await Tag.bulkCreate(tagSeeds);

  const productTags = await ProductTag.bulkCreate(producttagSeeds);

  console.log('\n----- DATABASE SYNCED -----\n');

  await categories;
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await products;
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await tags;
  console.log('\n----- TAGS SEEDED -----\n');

  await productTags;
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
