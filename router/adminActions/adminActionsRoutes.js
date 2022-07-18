const express = require("express");
const router = express.Router();
const { validateApiKey, validateAdmin } = require('../../middleware/index');
const adminActionController = require('../../controller/index').adminActionController
let routes = (app) => {
    router.post("/admin/addSkills",
        validateApiKey,
        validateAdmin,
        (req, res) => {
            console.log(req.body)
            adminActionController.addSkills(req, res)
        });
    router.post("/admin/level",
        validateApiKey,
        validateAdmin,
        (req, res) => {
            adminActionController.addLevel(req, res)
        });
    router.get("/admin/skills",
        validateApiKey,
        validateAdmin,
        (req, res) => {
            adminActionController.getSkills(req, res)
        });
    router.get("/admin/levels",
        validateApiKey,
        validateAdmin,
        (req, res) => {
            adminActionController.getLevels(req, res)
        });
    app.use(router);
};
module.exports = routes;