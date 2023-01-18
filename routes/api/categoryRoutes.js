const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    // find all categories
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one category
router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Category }, { model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT updates category based on its id
router.put('/:id', (req, res) => {
  // Calls the update method on the Category model
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      // update a category by its `id` value
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedCategory) => {
      // Sends the updated category as a json response
res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
const categoryData = await Category.destroy({
  where: {
    id: req.params.id
  }
});
if (!categoryData) {
  res.status(404).json({ message: 'No category with this id!'});
  return;
}

res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
