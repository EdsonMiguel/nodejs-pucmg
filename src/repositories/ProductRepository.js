const { v4 } = require('uuid')
const products = [
  { id: "6a03f7f4-4796-11ee-be56-0242ac120002", description: "Arroz parboilizado 5Kg", price: 25.00, brand: "Tio João" },
  { id: "6a03fc0e-4796-11ee-be56-0242ac120002", description: "Maionese 250gr", price: 7.20, brand: "Helmans" },
  { id: "6a040140-4796-11ee-be56-0242ac120002", description: "Iogurte Natural 200ml", price: 2.50, brand: "Itambé" },
  { id: "6a0402e4-4796-11ee-be56-0242ac120002", description: "Batata Maior Palha 300gr", price: 15.20, brand: "Chipps" },
  { id: "6a04047e-4796-11ee-be56-0242ac120002", description: "Nescau 400gr", price: 8.00, brand: "Nestlé" },
];

function findAll() {
  return products;
}

function findById(id) {
  return products.find((product) => product.id === id);
}

function create(product) {
  products.push({id:v4(), ...product});
}

function update(id, updatedProduct) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  return null;
}

function deleteById(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
}

const productRepository = {
  create,
  deleteById,
  findAll,
  findById,
  update,
};

module.exports = productRepository;
