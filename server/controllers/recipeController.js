require('../models/database');
const Category = require('../models/CategorySchema');



// Get homepage
exports.homepage = async(req, res) => {
  res.render('index', {title: 'My Celiac Husband - Home'});
}

//inserting data into cookingBlog DB
async function insetCategoryData(){
  try{
    await Category.insertMany([
      {
        "name": "Thai",
        "image": "thai-food.jpg"
      },
      {
        "name": "American",
        "image": "american-food.jpg"
      }, 
      {
        "name": "Chinese",
        "image": "chinese-food.jpg"
      },
      {
        "name": "Mexican",
        "image": "mexican-food.jpg"
      }, 
      {
        "name": "Indian",
        "image": "indian-food.jpg"
      },
      {
        "name": "Spanish",
        "image": "spanish-food.jpg"
      }
    ]);
  } catch (error){
    console.log('err', + error);
  }
}

insetCategoryData()

