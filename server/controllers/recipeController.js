require('../models/database');
const Category = require('../models/CategorySchema');



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





