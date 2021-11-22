require('../models/database');
const Category = require('../models/CategorySchema');
const Recipe = require('../models/RecipeSchema');


// Get homepage
exports.homepage = async(req, res) => {
  //* inserting data into cookingBlog DB from front page
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber); // grab the latest recipe

    const food = {latest}; 
    // pass the food object that contains latest object.
    res.render('index', {title: 'My Celiac Husband - Home', categories, food});
  }catch (error) {
    res.status(500).send({message: error.message || "Oops, something went wrong!"});
  }
}

// Get /categories
// categories
exports.exploreCategories = async(req, res) => {
  //* inserting data into cookingBlog DB from front page
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', {title: 'My Celiac Husband - View All Categories', categories});
  }catch (error) {
    res.status(500).send({message: error.message || "Oops, something went wrong!"});
  }
}

