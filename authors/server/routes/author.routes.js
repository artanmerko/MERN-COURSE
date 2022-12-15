const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
  app.get('/api/author/', AuthorController.getAllNames)
  app.get('/api/author/:id', AuthorController.getOneName)
  app.post('/api/author/', AuthorController.createName)
  app.put('/api/author/:id', AuthorController.updateName)
  app.delete('/api/author/:id', AuthorController.deleteName)
}