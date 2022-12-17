const PollController = require('../controllers/poll.controller');

module.exports = (app) => {
  app.get('/polls', PollController.getAllPolls)
  app.get('/polls/:id', PollController.getOnePoll)
  app.post('/polls/new', PollController.createPoll)
  app.put('/polls/:id', PollController.updatePoll)
  app.delete('/polls/:id', PollController.deletePoll)
}