const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://darchyk:l0veUkraine@volonterio-db.wkly9eh.mongodb.net/VolonterioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
const schema = new mongoose.Schema({ name: String, surname: String, email: String, password: String }, { collection: 'Users' });

const User = mongoose.model('User', schema);

module.exports = User;