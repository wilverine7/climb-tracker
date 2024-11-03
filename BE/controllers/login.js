async function verifyUserPassword(inputPassword, storedHashedPassword) {
    const isMatch = await bcrypt.compare(inputPassword, storedHashedPassword);
    return isMatch; // Returns true if the passwords match
}

// Example usage in a login function
async function loginUser(username, password) {
    const user = await User.findOne({ username });
    if (user) {
        const isPasswordValid = await verifyUserPassword(password, user.password);
        if (isPasswordValid) {
            console.log("Login successful!");
            // Continue with login process
        } else {
            console.log("Invalid password");
        }
    } else {
        console.log("User not found");
    }
}
