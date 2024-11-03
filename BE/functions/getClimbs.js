const User = require('../database/tables/users');
const Climb = require('../database/tables/climbs');


async function getClimbsForUser(userId) {
    try {
        const climbs = await Climb.find({ userId }).populate('userId', 'username');
        return climbs;
    } catch (error) {
        console.error("Error retrieving climbs for user:", error);
    }
}

module.exports = getClimbsForUser;

