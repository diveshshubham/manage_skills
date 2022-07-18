const emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
var jwt = require('jsonwebtoken');
var jwtsecret = "indiaisgreat";
const crypto = require('crypto');
const userModel = require('../../models/userModel/userModel');


module.exports = {

    /**
       * This API used to send referral invite link
       * @param {Object} req
       * @param {Object} res
       * @param {Object} adminModel
       * @returns {Object} Response
       */
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        let statusMessage = "bad request";

        if (!email) {
            statusMessage = "invalid email";
            res.status(400).send({ msg: statusMessage });
        } else if (!emailExp.test(email)) {
            statusMessage = "invalid email";
            res.status(400).send({ msg: statusMessage });
        } else if (!password) {
            statusMessage = "password empty";
            res.status(400).send({ msg: statusMessage });
        } else {
            const hashPassword = crypto.createHash('md5').update(password).digest("hex");
            let condition = {
                email: email,
                password: hashPassword
            };
            userModel.findOne(condition)
                .exec((err, userData) => {
                    if (err) {
                        res.status(500).send({ msg: "something went wrong" });
                    } else {
                        if (userData) {
                            createUserToken({ id: userData._id }, function (token) {

                                if (err) {
                                    res.serverError(err);
                                } else {
                                    console.log("token:", token);
                                    // data._doc["token"] = token;
                                    // console.log(data);
                                    res.status(200).send({ user: userData, token });
                                }


                                //res.ok({ user: userData, token: token });
                            });
                        } else {
                            res.status(400).send({ msg: "invalid cred" });
                        }
                    }
                });
        }
    }
    ,
    register: async (req, res) => {
        try {
            const fullName = req.body.fullName;
            const email = req.body.email;
            const password = req.body.password;
            let statusMessage = "bad request";

            if (!fullName) {
                statusMessage = "invalid name";
                res.status(400).send({ msg: statusMessage });
            } else if (!emailExp.test(email)) {
                statusMessage = "invalid email";
                res.status(400).send({ msg: statusMessage });
            } else if (!password) {
                statusMessage = "empty passwrod";
                res.status(400).send({ msg: statusMessage });
            } else {
                let emailCheck = await userModel.findOne({ email: email })
                if (emailCheck) {
                    statusMessage = "email already exists";
                    res.status(400).send({ msg: statusMessage });
                }
                const hashPassword = crypto.createHash('md5').update(password).digest("hex");
                const user = new userModel({
                    fullName: fullName,
                    email: email,
                    password: hashPassword
                });

                await user.save()
                res.status(200).send({ user: user })
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({ msg: err })
        }

    }

};



/**
* Used t o create JWT token
* @param {Object} admin
* @param {any} callback
*/
function createUserToken(user, callback) {
    var token = jwt.sign(user, jwtsecret, {
        expiresIn: "365d", // expires in 365 days
    });
    callback(token);
}
