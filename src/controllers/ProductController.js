const productRepository = require('../repositories/ProductRepository') 
const productSchema = require('../schemas/Product') 

function getAllProducts (req, res) {
  const products = productRepository.findAll()
  return res.status(200).send(products);
};

function getProductById (req, res) {
  const { id } = req.params;
  const product = productRepository.findById(id);
  if (product) {
    return res.status(200).send(product);
  }
  return res.status(404).json({
    code: 404,
    message: "Product not found"
  });
};

function createProduct (req, res) {
  try {
    const productData = req.body;
    productSchema.parse(productData); 
    productRepository.create(productData);
    return res.status(201).send();
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: "Invalid data",
      errors: error.errors,
    });
  }
};

function updateProduct (req, res){
  try {
    const { id } = req.params;
    const updatedProductData = req.body;
    productSchema.parse(updatedProductData); 
    const updatedProduct = productRepository.update(id, updatedProductData);
    if (updatedProduct) {
      return res.status(200).send(updatedProduct);
    }
    return res.status(404).json({
      code: 404,
      message: "Product not found",
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: "Invalid data",
      errors: error.errors,
    });
  }
};

function deleteProduct  (req, res)  {
  const { id } = req.params;
  const productExists = productRepository.findById(id);

  if(!productExists){
    return res.status(400).json({
      code: 400,
      message: "Product not found"
    })
  }
  productRepository.deleteById(id);
  return res.status(204).send();
};

module.exports =  {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
