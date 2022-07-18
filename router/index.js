const { defaultPage } = require('../controller');

module.exports = {
    "userRoutes":require('../router/userRoutes/userRoutes'),
    "skillRoutes":require('../router/skillRoutes/skillRoutes'),
    "assesmentRoutes":require('../router/assesmentRoutes/assesmentRoutes'),
    "adminRoutes":require('../router/adminRoutes/adminRoutes'),
    "adminActions":require('../router/adminActions/adminActionsRoutes')
}