// app.js
const express = require('express');
const { connectToDb } = require('./config/db');
const getClimbsForUser = require('./functions/getClimbs');
const saveClimbForUser = require('./functions/saveClimb');
const createUser = require('./functions/createUser');


const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

(async function initializeApp() {
    try {
        await connectToDb().catch(console.dir);
    } catch (error) {
        console.error("Could not start the server:", error);
        process.exit(1);
    }
})();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



//examples
// await createUser({
//             username: 'johndoe',
//             email: 'john@example.com',
//             password: 'securepassword',
//             firstName: 'John',
//             lastName: 'Doe'
//         });

// await saveClimbForUser('6727bb7c6b161969691d4d9b', {
//     name: 'El Capitan',
//     grade: '5.13a',
//     type: 'overhung',
//     location: 'Yosemite',
// });

// // Example usage
// await getClimbsForUser('6727bb7c6b161969691d4d9b').then(climbs => {
//     console.log("Climbs for user:", climbs);
// });