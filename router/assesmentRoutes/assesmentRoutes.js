const express = require("express");
const router = express.Router();
const { validateApiKey, validateToken } = require('../../middleware/index');
const assesmentController = require('../../controller/index').assesmentController
let routes = (app) => {
    router.post("/assesment/addAssesment",
        validateApiKey,
        validateToken,
        (req, res) => {
            assesmentController.addAssesment(req, res)
        }
    );

    router.put("/assesment/updateAssesment/:assesmentUserId",
        validateApiKey,
        validateToken,
        (req, res) => {
            assesmentController.updAssesment(req, res)
        });

    router.post("/assesment/self/add",
        validateApiKey,
        validateToken,
        (req, res) => {
            assesmentController.addSelfAssesment(req, res)
        });

    router.put("/assesment/self/edit/:selfAssId",
        validateApiKey,
        validateToken,
        (req, res) => {
            assesmentController.editSelfAssesment(req, res)
        });

    router.get("/assesment/getDetails",
        validateApiKey,
        validateToken,
        (req, res) => {
            assesmentController.getAssesmet(req, res)
        });
        
    router.get("/assesment/getSelfAssesment/:skillId",
        validateApiKey,
        validateToken,
        (req, res) => {
            assesmentController.getSelfAssesment(req, res)
        });

    app.use(router);
};
module.exports = routes;