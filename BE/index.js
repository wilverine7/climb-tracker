// app.js
const express = require('express');
const { connectToDb } = require('./config/db');

const app = express();

(async function initializeApp() {
    try {
        const db = await connectToDb().catch(console.dir);
    } catch (error) {
        console.error("Could not start the server:", error);
        process.exit(1);
    }
})();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
