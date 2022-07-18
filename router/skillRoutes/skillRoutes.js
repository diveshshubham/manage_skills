const express = require("express");
const router = express.Router();
const { validateApiKey, validateToken } = require('../../middleware/index');
const skillController = require('../../controller/index').skillController
let routes = (app) => {
    router.get("/skill/getSkills",
        validateApiKey,
        (req, res) => {
            skillController.getSkills(req, res)
        }
    );

    router.post("/skill/addSkills",
        validateApiKey,
        validateToken,
        (req, res) => {
            skillController.addSkills(req, res)
        });

    router.put("/skill/editSkills/:skillUserMapId",
        validateApiKey,
        validateToken,
        (req, res) => {
            skillController.editSkills(req, res)
        });

    router.get("/skill/skillByUserId",
        validateApiKey,
        validateToken,
        (req, res) => {
            skillController.getSkillsByUid(req, res)
        });

    router.get("/skill/welcome", (req, res) => {
        res.send({ msg: "welcome" })
    })
    app.use(router);
};
module.exports = routes;