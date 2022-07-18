const express = require("express");
const router = express.Router();
const admincontroller = require('../../controller/index').adminController
let routes = (app) => {
    router.post("/admin/register", (req, res) => {
        console.log(req.body)
        admincontroller.register(req, res)
    }
    );
    router.post("/admin/login", (req,res) => {
        admincontroller.login(req,res)
    });
    app.use(router);
};
module.exports = routes;