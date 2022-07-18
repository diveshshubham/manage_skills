const homePage = async (req, res) => {
    res.status(200).send({
        message: " 👋 Manage Skills"
    })
}
module.exports = { homePage }
