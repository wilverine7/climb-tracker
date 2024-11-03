const User = require('../database/tables/users');
const Climb = require('../database/tables/climbs');

// Assuming you have a `user` object from login or registration
async function saveClimbForUser(userId, climbData) {
    try {
        const newClimb = new Climb({
            ...climbData,
            userId,  // Associate the climb with the user
        });

        await newClimb.save();
        console.log("Climb saved for user:", userId);
    } catch (error) {
        console.error("Error saving climb:", error);
    }
}
module.exports = saveClimbForUser;

