const bcrypt = require('bcrypt');
const User = require('../database/tables/users');

// Function to create a new user
async function createUser(userData) {
    try {
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const newUser = new User({
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            firstName: userData.firstName,
            lastName: userData.lastName,
        });

        await newUser.save();
        console.log("New User Created", newUser._id); // Display the new user's ID
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

module.exports = createUser;



