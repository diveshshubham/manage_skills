const express = require("express");
const router = express.Router();
const userController = require('../../controller/index').userController
let routes = (app) => {
    router.post("/user/register", (req, res) => {
        console.log(req.body)
        userController.register(req, res)
    }
    );
    router.post("/user/login", (req,res) => {
        userController.login(req,res)
    });
    router.get("/user/welcome", (req, res) => {
        res.send({ msg: "welcome" })
    })
    app.use(router);
};
module.exports = routes;