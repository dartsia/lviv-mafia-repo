const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/volonter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
const schema = new mongoose.Schema({ name: String, surname: String, email: String, password: String });

const User = mongoose.model('User', schema);

module.exports = User;