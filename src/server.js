const  express = require('express');
const  productRoutes = require('./routes/product.routes') ;
const  env = require('dotenv');

env.config()

const app = express();

app.use(express.json());
app.use(productRoutes);

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
