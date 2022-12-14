const ProductController = require('../controller/product.controller');

module.exports = (app) => {
  app.get('/api/products', ProductController.findAllProducts)
  app.get('/api/products/:id', ProductController.findSingleProduct)
  app.post('/api/products/new', ProductController.createNewProduct)
  app.put('/api/products/:id', ProductController.updateProduct)
  app.delete('/api/products/:id', ProductController.deleteProduct)
}