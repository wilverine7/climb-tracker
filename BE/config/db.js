const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// Replace with your MongoDB URI
const uri = process.env.MONGO_URI;

// Create a MongoDB client instance
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
let dbConnection;

async function connectToDb() {
    if (!dbConnection) {

        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            dbConnection = client.db();
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    return dbConnection;
}

module.exports = { connectToDb };

