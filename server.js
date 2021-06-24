const express = require("express");
const app = express();
const db = require("./src/models");
const initRoutes = require("./src/routes/web");
const cors = require('cors')

app.use(cors());
app.options('*', cors());


global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = 3001;
app.listen(port, () => {
  console.log(`Rodando em :${port}`);
});
