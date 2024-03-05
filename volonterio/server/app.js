require('dotenv').config();
let webRoutes = require('./Routes/web');
let express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use('/', webRoutes);


app.listen(PORT, () => {
  console.log('Server');
});
