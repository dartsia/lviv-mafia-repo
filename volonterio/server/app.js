require('dotenv').config();
let webRoutes = require('./Routes/web');
let express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', webRoutes);


app.listen(PORT, () => {
  console.log(`${process.env.PORT}`);
});
