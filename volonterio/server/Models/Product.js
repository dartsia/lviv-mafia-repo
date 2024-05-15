const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://darchyk:l0veUkraine@volonterio-db.wkly9eh.mongodb.net/VolonterioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  const schema = new mongoose.Schema({
    user_id: String,
    name: String,
    organization: String,
    price: String,
    description: String,
    file: String, 
  }, { collection: 'Products' });
  
const Product = mongoose.model('Product', schema);

module.exports = Product;