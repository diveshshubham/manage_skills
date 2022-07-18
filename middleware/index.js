module.exports = {
    "validateApiKey": require('./apiKey/apiKey'),
    "validateToken": require('./token/token'),
    "validateAdmin": require('./token/adminToken')
};