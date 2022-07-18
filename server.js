const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:8086"
};
app.use(cors(corsOptions));


const user = require('./router/index').userRoutes;
const skill = require('./router/index').skillRoutes;
const assesment = require('./router/index').assesmentRoutes;
const admin = require('./router/index').adminRoutes;
const adminAction = require('./router/index').adminActions;
const defaultRoute = require('./router/index').defaultPage;

app.use(express.urlencoded({ extended: true }));
user(app)
skill(app)
assesment(app)
admin(app)
adminAction(app)

function initializeDatabaseConnection(){
  require('./database/mongo/connection')
}

initializeDatabaseConnection()

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});