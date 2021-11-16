require('../models/database');
const Category = require('../models/CategorySchema');
const Recipe = require('../models/RecipeSchema');




// Get homepage
exports.homepage = async(req, res) => {
  //* inserting data into cookingBlog DB from front page
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('index', {title: 'My Celiac Husband - Home', categories});
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

// insert Dummy data 
async function insertRecipeData(){
  try {
    await Recipe.insertMany([
            { 
              "name": "Recipe Name Goes Here",
              "description": `Recipe Description Goes Here`,
              "email": "recipeemail@raddy.co.uk",
              "ingredients": [
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
              ],
              "category": "American", 
              "image": "southern-friend-chicken.jpg"
            },
            { 
              "name": "Recipe Name Goes Here",
              "description": `Recipe Description Goes Here`,
              "email": "recipeemail@raddy.co.uk",
              "ingredients": [
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
              ],
              "category": "American", 
              "image": "southern-friend-chicken.jpg"
            },
          ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertRecipeData();





