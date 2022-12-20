const playerCtlr = require("../controllers/player.controller");

module.exports = (app) => {
  app.post("/api/player", playerCtlr.createNewPlayer);
  app.get("/api/player", playerCtlr.getAllPlayers);
  app.delete("/api/player/:id", playerCtlr.deletePlayer);
  app.put("/api/player/:id", playerCtlr.updatePlayer);
};